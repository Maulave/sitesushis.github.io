const btnMenu = document.getElementById('btnMenu');
const btnFullMenu = document.getElementById('fullMenu');
const btnCloseMenu = document.getElementById('closeFullMenu');

btnMenu.addEventListener('click', () => {
    btnFullMenu.style.display = 'flex';
})

btnCloseMenu.addEventListener('click', () => {
    btnFullMenu.style.display = 'none';
})