const target = document.querySelector('.example-z-index--2 > li:first-child');
const trigger = document.querySelector('.example-button--z-index-increment');
const reset = document.querySelector('.example-button--z-index-reset');

const handleZIndex = () => {
  if (!target) return;

  const currentZIndex = window.getComputedStyle(target).getPropertyValue('z-index');

  target.style.zIndex = String(Number(currentZIndex) + 1);
}

const resetZIndex = () => {
  if (!target) return;

  target.removeAttribute('style');
}

if (trigger) {
  trigger.addEventListener('click', handleZIndex);
}

if (reset) {
  reset.addEventListener('click', resetZIndex);
}
