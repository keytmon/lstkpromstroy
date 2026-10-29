export const initGlobalReviewsListener = (componentInstance) => {

    const moreButtons = componentInstance.querySelectorAll('.item-more-btn');

    moreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {

            const card = e.target.closest('.reviews-item');

            if (!card) return;

            const textParagraph = card.querySelector('.review-text');

            if (!textParagraph) return;

            if (e.target.textContent.trim() === 'Читать полностью') {
                textParagraph.classList.toggle('preview-text');
                e.target.textContent = 'Скрыть';
            } else {
                textParagraph.classList.toggle('preview-text');
                e.target.textContent = 'Читать полностью';
            }
        });
    });
};