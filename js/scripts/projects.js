export const initProjectsFilter = () => {
    const filterButtons = document.querySelectorAll('.completed-projects__category-item');
    const projectCards = document.querySelectorAll('.completed-projects__item-btn-link');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterValue = e.target.getAttribute('data-filter');

            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            projectCards.forEach(card => {
                const categoryTag = card.querySelector('.item-category');

                if (!categoryTag) return;

                const text = categoryTag.textContent.trim().toLowerCase();

                let cardCategory = '';

                switch (true) {
                    case text.includes('торгово-развлекательный центр'):
                        cardCategory = 'mall';
                        break;
                    case text.includes('склад'):
                        cardCategory = 'warehouse';
                        break;
                    case text.includes('автосервис'):
                        cardCategory = 'autoservice';
                        break;
                    case text.includes('комплекс'):
                        cardCategory = 'complex';
                        break;
                    default:
                        cardCategory = 'all';
                }

                if (filterValue === 'all' || filterValue === cardCategory) {
                    card.style.display = '';
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
};