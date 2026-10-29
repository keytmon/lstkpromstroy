export const initServiceSpoiler = () => {
    const textContainer = document.querySelector('.service-detail__text');
    const moreBtn = document.querySelector('.more-text-btn');

    if (!textContainer || !moreBtn) return;

    moreBtn.addEventListener('click', () => {
        if (moreBtn.textContent.trim() === 'Читать далее') {
            textContainer.classList.toggle('preview-text');
            moreBtn.textContent = 'Скрыть';
        } else {
            textContainer.classList.toggle('preview-text');
            moreBtn.textContent = 'Читать далее';
        }
    });
};