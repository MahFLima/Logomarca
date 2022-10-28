import './css/style.css'

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active')
})

