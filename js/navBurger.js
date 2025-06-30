const burger = document.getElementById('burger');
const menu = document.querySelector('.menu');
const menuClickArea = document.getElementById('menu-click-area');

menuClickArea.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('show');
});