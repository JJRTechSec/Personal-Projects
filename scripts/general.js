// Responsive menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  if (window.innerWidth < 1200) {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
  }
})