const modalTogglers = document.querySelectorAll('[data-togglemodal]');

const toggleModal = event => {
  const nearestModal = event.target.closest('[data-modalwrapper]').querySelector('[data-modal]');

  if (nearestModal.open) {
    nearestModal.close();
  } else {
    nearestModal.showModal();
  }

  nearestModal.classList.toggle('example-bem-modal--open');
}

modalTogglers.forEach(toggler => toggler.addEventListener('click', toggleModal));
