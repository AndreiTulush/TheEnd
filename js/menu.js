const humburgerMenu = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuListItem = menu.querySelectorAll('.menu-list__item');

humburgerMenu.addEventListener('click', () => {
    menu.classList.add('menu-active');
});

menuListItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-active');
    })
})

document.addEventListener('click', e => {
    if (
        !(e.target.closest('.menu') ||
            e.target.closest('.humburger-menu'))
    ) {
        menu.classList.remove('menu-active');
    }
})

