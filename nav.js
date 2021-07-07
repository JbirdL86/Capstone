const navElement = document.querySelector('.nav-menu');
const openIcon = document.querySelector('.openIcon');
const closeIcon = document.querySelector('.closeIcon');

function open() {
  navElement.classList.replace('nav-menu', 'menuVisible');
}

function close() {
  navElement.classList.replace('menuVisible', 'nav-menu');
}

openIcon.addEventListener('click', open);
closeIcon.addEventListener('click', close);