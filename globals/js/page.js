document.addEventListener('DOMContentLoaded', () => {
  const currentPathname = window.location.pathname.split('/').at(-1);
  const navNodes = Array.from(document.querySelectorAll('.main-navigation__item'));

  navNodes.forEach(element => {
    const isCurrentLink = element.querySelector(`a[href$="${currentPathname}"]`);

    if (isCurrentLink) {
      element.classList.add('main-navigation__item--current');
    }
  });

});