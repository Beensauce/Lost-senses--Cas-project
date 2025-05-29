const mobileButton = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})