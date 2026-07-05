// Touch (swipe + tap zones) and keyboard controls.
// handlers: { left(), right(), jump() }

const SWIPE_MIN = 30;

export function createInput(el, handlers) {
  let startX = 0;
  let startY = 0;
  let swiped = false;
  let tracking = false;

  const onTouchStart = (e) => {
    e.preventDefault();
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
    swiped = false;
    tracking = true;
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    if (!tracking || swiped) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;
    if (Math.abs(dx) >= SWIPE_MIN && Math.abs(dx) > Math.abs(dy)) {
      swiped = true;
      if (dx < 0) handlers.left();
      else handlers.right();
    } else if (dy <= -SWIPE_MIN && Math.abs(dy) > Math.abs(dx)) {
      swiped = true;
      handlers.jump();
    }
  };

  const onTouchEnd = (e) => {
    e.preventDefault();
    if (!tracking) return;
    tracking = false;
    if (swiped) return; // swipes take precedence over taps
    // Tap zones: left third / middle third / right third.
    const x = e.changedTouches[0].clientX;
    const w = window.innerWidth;
    if (x < w / 3) handlers.left();
    else if (x > (2 * w) / 3) handlers.right();
    else handlers.jump();
  };

  const onKeyDown = (e) => {
    if (e.repeat) return;
    switch (e.code) {
      case 'ArrowLeft':
      case 'KeyA':
        handlers.left();
        break;
      case 'ArrowRight':
      case 'KeyD':
        handlers.right();
        break;
      case 'ArrowUp':
      case 'KeyW':
      case 'Space':
        e.preventDefault();
        handlers.jump();
        break;
    }
  };

  el.addEventListener('touchstart', onTouchStart, { passive: false });
  el.addEventListener('touchmove', onTouchMove, { passive: false });
  el.addEventListener('touchend', onTouchEnd, { passive: false });
  window.addEventListener('keydown', onKeyDown);

  return {
    destroy() {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('keydown', onKeyDown);
    },
  };
}
