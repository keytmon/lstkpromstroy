const TOTAL_PAGES = 17;
const CARDS_PER_PAGE = 16;
let currentPage = 1;

const displayCards = (page, allItems, containerId) => {
    const articlesContainer = document.getElementById(containerId);

    if (!articlesContainer) return;

    articlesContainer.innerHTML = '';

    const startIndex = (page - 1) * CARDS_PER_PAGE;
    const endIndex = startIndex + CARDS_PER_PAGE;
    const pageItems = allItems.slice(startIndex, endIndex);

    pageItems.forEach(data => {
        const card = document.createElement('lstk-article');

        card.setAttribute('title', data.title);
        card.setAttribute('url', data.url);
        articlesContainer.appendChild(card);
    });
};

const setupPagination = (allItems, containerId, contentType) => {
    const paginationContainer = document.getElementById('pagination-container');
    const articlesContainer = document.getElementById(containerId);

    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    const paginationScheme = [];

    for (let i = 1; i <= TOTAL_PAGES; i++) {
        if (i === 1 || i === TOTAL_PAGES || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationScheme.push(i);
        } else if (paginationScheme[paginationScheme.length - 1] !== '...') {
            paginationScheme.push('...');
        }
    }

    paginationScheme.forEach(item => {
        if (item === '...') {
            const dots = document.createElement('span');

            dots.textContent = '...';
            dots.classList.add('pagination__item', 'pagination__item--dots');
            paginationContainer.appendChild(dots);
        } else {
            const btn = document.createElement('a');

            btn.href = '#';
            btn.textContent = item;
            btn.classList.add('pagination__item');

            if (item === currentPage) {
                btn.classList.add('pagination__item--active');
            }

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                currentPage = item;
                localStorage.setItem(`page_${contentType}`, currentPage);

                displayCards(currentPage, allItems, containerId);
                setupPagination(allItems, containerId, contentType);

                if (articlesContainer) {
                    articlesContainer.scrollIntoView({ behavior: 'smooth' });
                }
            });
            paginationContainer.appendChild(btn);
        }
    });
};

const initPage = (contentType, containerId) => {
    const articlesContainer = document.getElementById(containerId);
    const paginationContainer = document.getElementById('pagination-container');

    if (!articlesContainer || !paginationContainer) return;

    const savedPage = localStorage.getItem(`page_${contentType}`);

    currentPage = savedPage ? parseInt(savedPage, 10) : 1;

    currentPage = parseInt(localStorage.getItem(`page_${contentType}`)) || 1;

    const allItems = [];

    for (let i = 1; i <= 263; i++) {
        const cardTitle = contentType === 'Статьи'

            ? `Название статьи №${i}`
            : `Заголовок №${i}`;
        const cardUrl = contentType === 'Статьи'  ? 'article-detail.html' : 'news-detail.html' ;

        allItems.push({ title: cardTitle, url: cardUrl });
    }

    displayCards(currentPage, allItems, containerId);
    setupPagination(allItems, containerId, contentType);
};