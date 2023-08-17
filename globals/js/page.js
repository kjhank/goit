import { paths } from './paths.js';

const getPaths = () => {
  return paths.reduce((result, current) => {
    const isIndex = current.path.endsWith('index.html');

    if (isIndex) {
      return [...result, current];
    }

    return result;

  }, []);
}

const renderPaths = () => {
  const indices = getPaths();

  const innerHTML = indices.reduce((result, current) => {
    const liString = `<li><a href="${current.path}">${current.name}</a></li>`;

    return `${result}${liString}`;
  }, '');


  return innerHTML;
}

const attachPathsToNav = () => {
  const mainNav = document.querySelector('.main-navigation');

  const pathsHTML = renderPaths();
  const tocButton = document.createElement('button');
  const toc = document.createElement('ul');

  const handleButtonClick = () => {
    toc.classList.toggle('main-navigation__toc--active');
  }

  toc.classList.add('main-navigation__toc');
  tocButton.classList.add('main-navigation__toc-toggle');
  tocButton.innerText = 'Spis treści';
  toc.innerHTML = pathsHTML;

  mainNav.appendChild(toc);
  mainNav.appendChild(tocButton);

  tocButton.addEventListener('click', handleButtonClick);

}

document.addEventListener('DOMContentLoaded', () => {
  const currentPathname = window.location.pathname.split('/').at(-1);
  const navNodes = Array.from(document.querySelectorAll('.main-navigation__item'));

  navNodes.forEach(element => {
    const isCurrentLink = element.querySelector(`a[href$="${currentPathname}"]`);

    if (isCurrentLink) {
      element.classList.add('main-navigation__item--current');
    }
  });

  attachPathsToNav();
});