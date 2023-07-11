document.addEventListener('DOMContentLoaded', () => {
  const realButton = document.querySelector('.example__html--buttons button');

  if (!realButton) return;

  const handleClick = () => {
    alert('You should see the other guy.');
  }

  realButton.addEventListener('click', handleClick);
});