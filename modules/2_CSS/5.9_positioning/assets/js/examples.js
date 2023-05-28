const target = document.querySelector('.example-z-index--2 > li:first-child');
const trigger = document.querySelector('.example-button--z-index-increment');
const reset = document.querySelector('.example-button--z-index-reset');

const handleZIndex = () => {
  const currentZIndex = window.getComputedStyle(target).getPropertyValue('z-index');

  target.style.zIndex = String(Number(currentZIndex) + 1);
}

const resetZIndex = () => {
  target.removeAttribute('style');
}

trigger.addEventListener('click', handleZIndex);

reset.addEventListener('click', resetZIndex);