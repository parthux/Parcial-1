"use Strict"; //javascrip moderno On

const menuHamburguesa = document.getElementById('menu');

menuHamburguesa.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('nav__link--action');
});