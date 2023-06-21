const openMenuButton = document.querySelector('.js-open-menu');
const closeMenuButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

openMenuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('page-header__links-wrapper--is-open');
});

closeMenuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('page-header__links-wrapper--is-open');
});
