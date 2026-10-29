const initTocHighlight = () => {
    const headings = document.querySelectorAll('.article-detail__text h2[id]');
    const tocLinks = document.querySelectorAll('.article-detail__toc-link');

    if (!headings.length || !tocLinks.length) return;

    const options = {
        root: null,
        rootMargin: '-126px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                tocLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');

                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, options);

    headings.forEach(heading => observer.observe(heading));
};

const initRelatedPosts = (containerId, contentType) => {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = '';

    for (let i = 1; i <= 4; i++) {

        const card = document.createElement('lstk-article');

        const recommendedTitle = contentType === 'Статьи'
            ? `Название статьи №${i}`
            : `Заголовок №${i}`;

        card.setAttribute('title', recommendedTitle);
        container.appendChild(card);
    }
};

document.addEventListener('DOMContentLoaded', initRelatedPosts);
document.addEventListener('DOMContentLoaded', initTocHighlight);