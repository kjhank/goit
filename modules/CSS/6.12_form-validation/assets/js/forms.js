const forms = Array.from(document.querySelectorAll('form'));
const passButtons = Array.from(document.querySelectorAll('.password-wrapper > button'));

const handleForm = event => {
  event.preventDefault();

  if (!event.target) return;

  const message = event.target.querySelector('[data-message]');
  const isValid = event.target.checkValidity();

  if (!message || !isValid) return;

  message.innerText = 'OK';
  message.classList.remove('visually-hidden');

};

const togglePassVisibility = ({ target }) => {
  if (!target) return;

  const passInput = target.closest('.password-wrapper').querySelector('input[name="myPassword"]');

  passInput.type = passInput.type === 'password' ? 'text' : 'password';
}

forms.forEach(form => form.addEventListener('submit', handleForm))

passButtons.forEach(button => button.addEventListener('click', togglePassVisibility));