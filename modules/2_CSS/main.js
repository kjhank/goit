const flipClickHandler = event => {
  const flipTarget = event.currentTarget.closest('section').querySelector('[data-action="flippable"]');

  if (!flipTarget) return;

  const [firstClass] = Array.from(flipTarget.classList);

  flipTarget.classList.toggle(`${firstClass}--flipped`);

}

window.addEventListener('DOMContentLoaded', () => {
  const flipTrigger = document.querySelector('[data-action="flip-sibling"]');

  if (!flipTrigger) return;

  flipTrigger.addEventListener('click', flipClickHandler);
});
