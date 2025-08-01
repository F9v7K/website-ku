const toggleMenu = document.querySelector('.toggle input');
const hamburger = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function () {
    hamburger.classList.toggle('slide');
});


