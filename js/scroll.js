const links = document.querySelectorAll('.menu-list__link');
const mainSrols = document.querySelector('.main__scroll');
const btn = document.querySelector('.main__button');

const allLinks = [...links, mainSrols, btn];
allLinks.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();

        const id = item.getAttribute('href').substring(1);
        const section = document.getElementById(id);


        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        };

    });
});

