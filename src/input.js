// Controls: press anywhere on the canvas (touch/pointer) or Space /
// ArrowUp / W to jump. Every press is a full-power jump — release doesn't
// matter, we only track held state to swallow key repeat / multi-touch.
// ArrowLeft/A and ArrowRight/D steer during choice mode (reported as
// per-direction held transitions; on-screen buttons feed the same path
// via ui.js).
// handlers: { onJump(), onMove(dir, held) }

const MOVE_KEYS = { ArrowLeft: -1, KeyA: -1, ArrowRight: 1, KeyD: 1 };

export function createInput(el, handlers) {
  let pointerHeld = false;
  let keyHeld = false;
  const moveCodes = new Set(); // held movement key codes
  const moveActive = { '-1': false, 1: false };

  const refreshMove = () => {
    for (const dir of [-1, 1]) {
      const active = [...moveCodes].some((c) => MOVE_KEYS[c] === dir);
      if (active !== moveActive[dir]) {
        moveActive[dir] = active;
        if (handlers.onMove) handlers.onMove(dir, active);
      }
    }
  };

  const onPointerDown = (e) => {
    if (e.target && e.target.closest && e.target.closest('button')) return;
    e.preventDefault();
    if (!pointerHeld && !keyHeld) handlers.onJump();
    pointerHeld = true;
  };
  const onPointerUp = () => {
    pointerHeld = false;
  };

  const onKeyDown = (e) => {
    if (e.code in MOVE_KEYS) {
      e.preventDefault();
      moveCodes.add(e.code);
      refreshMove();
      return;
    }
    if (e.code !== 'Space' && e.code !== 'ArrowUp' && e.code !== 'KeyW') return;
    e.preventDefault();
    if (e.repeat || keyHeld) return;
    if (!pointerHeld) handlers.onJump();
    keyHeld = true;
  };
  const onKeyUp = (e) => {
    if (e.code in MOVE_KEYS) {
      moveCodes.delete(e.code);
      refreshMove();
      return;
    }
    if (e.code !== 'Space' && e.code !== 'ArrowUp' && e.code !== 'KeyW') return;
    keyHeld = false;
  };

  if (window.PointerEvent) {
    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  } else {
    el.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchend', onPointerUp);
    window.addEventListener('touchcancel', onPointerUp);
    el.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);
  }
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  return {
    destroy() {
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      el.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchend', onPointerUp);
      window.removeEventListener('touchcancel', onPointerUp);
      el.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    },
  };
}
