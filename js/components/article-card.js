/*
 * @extends HTMLElement
 * @customElement lstk-article
 */

export class LSTKArticle extends HTMLElement {

    connectedCallback() {
        const articleTitle = this.getAttribute('title') || 'Название';
        const articleUrl = this.getAttribute('url') || '#';
        this.render(articleTitle, articleUrl);
    }

    render(title, url) {

        this.innerHTML = `
             <div class="articles__item">
                  <div class="articles__item-preview">
                       <div class="articles__item-img"></div>
                  </div>
                  <div class="articles__item-info">
                       <div class="articles__date-of-publication">01.01.2025</div>
                       <div class="articles__item-title">${title}</div>
                       <div class="articles__item-preview-text text">Легкие стальные тонкостенные конструкции, или сокращенно
                            ЛСТК – это технология строительства и проектирования быстровозводимых...
                       </div>
                       <div class="articles__item-more-button text">
                            <a class="articles__link" href="${url}">Читать далее</a>
                       </div>
                  </div>
             </div>
        `;
    }
}

customElements.define('lstk-article', LSTKArticle);