const buttonTabs = document.querySelectorAll('.design-list__item');
const designDescr = document.querySelectorAll('.design__descr');
const designImages = document.querySelectorAll('.design-images');
const designBlockImg = document.querySelectorAll('.design-block__img')

buttonTabs.forEach((item, i) => {
    const changeTabs = (array) => {
        array.forEach((arr, index) => {
            if (i === index) {
                arr.classList.remove('hidden');
            } else {
                arr.classList.add('hidden');
            };
        });
    };

    item.addEventListener('click', e => {

        changeTabs(designDescr);
        changeTabs(designImages);
        changeTabs(designBlockImg);

        buttonTabs.forEach((arr) => {
            if (arr === e.target) {
                arr.classList.add('design-list__item_active');
            } else {
                arr.classList.remove('design-list__item_active');
            };
        });
    });
});

