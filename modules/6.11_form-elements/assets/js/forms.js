const forms = Array.from(document.querySelectorAll('form'));

const handleForm = event => {
  event.preventDefault();

  if (!event.target) return;

  const data = new FormData(event.target)

  Array.from(data.entries()).forEach(([key, value]) => console.log(`${key}: ${value}`));
  // console.log(Object.fromEntries(data.entries()));
};

forms.forEach(form => form.addEventListener('submit', handleForm))