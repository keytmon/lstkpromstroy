export const initServicesTabs = () => {
    const serviceItems = document.querySelectorAll('.services__item');
    const imageBlock = document.querySelector('.services__img');
    const initialActiveItem = document.querySelector('.services__item.active');

    if (serviceItems.length === 0 || !imageBlock) return;

    if (initialActiveItem) {
        const startImg = initialActiveItem.getAttribute('data-service-img');
        if (startImg) imageBlock.style.backgroundImage = `url("${startImg}")`;
    }

    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            serviceItems.forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');

            const newImgPath = e.target.getAttribute('data-service-img');

            if (newImgPath) {
                imageBlock.style.backgroundImage = `url("${newImgPath}")`;
            }
        });
    });
};