/*
 * @extends HTMLElement
 * @customElement lstk-reviews
 */

import { initGlobalReviewsListener } from '../scripts/reviews.js';

export class LSTKReviews extends HTMLElement {

    connectedCallback() {

        this.render();
        this.addListeners();

        if (typeof initGlobalReviewsListener === 'function') {
            initGlobalReviewsListener(this);
        }
    }

    render() {

        let reviews = '';

        for (let i = 1; i <= 5; i++) {
            reviews += `
                <div class="reviews__item reviews-item">
                        <div class="reviews__item-header">
                                <div class="reviews__item-info">
                                    <div class="reviews__item-img"></div>
                                    <div class="reviews__text-info">
                                        <div class="reviews__item-name text text-b">Иванов Иван Иванович</div>
                                        <div class="reviews__item-job-title text">Генеральный директор ООО «Ромашка»</div>
                                    </div>
                                </div>
                                <div class="reviews__item-grade">★★★★☆</div>
                        </div>
                        <div class="reviews__item-review-text review-text preview-text text">Картельные сговоры не 
                            допускают ситуации, при которой тщательные исследования конкурентов, превозмогая сложившуюся 
                            непростую экономическую ситуацию, призваны к ответу. Сложно сказать, почему действия 
                            представителей оппозиции, вне зависимости от их уровня, должны быть ассоциативно распределены 
                            по отраслям. Имеется спорная точка зрения, гласящая примерно следующее: представители 
                            современных социальных резервов, вне зависимости от их уровня, должны быть разоблачены. 
                            Следует отметить, что высокотехнологичная концепция общественного уклада позволяет выполнить 
                            важные задания по разработке кластеризации усилий. Прежде всего, повышение уровня гражданского 
                            сознания обеспечивает широкому кругу (специалистов) участие в формировании укрепления моральных 
                            ценностей.
                        </div>
                        <div class="reviews__item-more-btn item-more-btn text">Читать полностью</div>
                </div>
            `;
        }

        this.innerHTML = `
            <div class="reviews">
                <div class="container">
                    <h1 class="reviews__title title">Отзывы</h1>
                    <div class="reviews__grid">
                        <div class="reviews__list">${reviews}</div>
                        <div class="reviews__btn btn btn-y text text-b">Оставить отзыв</div>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners() {
        const leaveReviewBtn = document.querySelector('.reviews__btn');
        const modalElement = document.querySelector('#reviews-popup-element');

        if (leaveReviewBtn && modalElement) {
            leaveReviewBtn.addEventListener('click', () => {

                modalElement.openModal();
            });
        }
    }
}

customElements.define('lstk-reviews', LSTKReviews);