const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');


hamburger.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'block';
})

closeMenu.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
})