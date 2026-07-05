// Controls: press anywhere on the canvas (touch/pointer) or Space /
// ArrowUp / W to jump. Hold = higher jump, so we report start AND end.
// ArrowLeft/A and ArrowRight/D steer during choice mode (reported as
// per-direction held transitions; on-screen buttons feed the same path
// via ui.js).
// handlers: { onJumpStart(), onJumpEnd(), onMove(dir, held) }

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

  const start = () => {
    if (!pointerHeld && !keyHeld) handlers.onJumpStart();
  };
  const end = () => {
    if (!pointerHeld && !keyHeld) handlers.onJumpEnd();
  };

  const onPointerDown = (e) => {
    if (e.target && e.target.closest && e.target.closest('button')) return;
    e.preventDefault();
    start();
    pointerHeld = true;
  };
  const onPointerUp = () => {
    if (!pointerHeld) return;
    pointerHeld = false;
    end();
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
    start();
    keyHeld = true;
  };
  const onKeyUp = (e) => {
    if (e.code in MOVE_KEYS) {
      moveCodes.delete(e.code);
      refreshMove();
      return;
    }
    if (e.code !== 'Space' && e.code !== 'ArrowUp' && e.code !== 'KeyW') return;
    if (!keyHeld) return;
    keyHeld = false;
    end();
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
