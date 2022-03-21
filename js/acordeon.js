const acordeon = document.querySelector('.feature-list');
const acordeonButton = acordeon.querySelectorAll('.feature__link');

acordeonButton.forEach(item => {
    item.addEventListener('click', () => {
        acordeonButton.forEach(btn => {
            btn.classList.remove('feature__link_active');
            btn.nextElementSibling.classList.add('hidden');
        })

        item.classList.toggle('feature__link_active');
        item.nextElementSibling.classList.toggle('hidden');
    });
});