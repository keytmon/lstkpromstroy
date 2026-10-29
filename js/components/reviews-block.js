/*
 * @extends HTMLElement
 * @customElement reviews-block
 */

import { initGlobalReviewsListener } from "../scripts/reviews.js";

export class ReviewsBlock extends HTMLElement {

    connectedCallback() {

        this.render();

        if (typeof initGlobalReviewsListener === 'function') {
            initGlobalReviewsListener(this);
        }
    }

    render() {

        let reviews = '';

        for (let i = 1; i <= 4; i++) {

            reviews += `
                <div class="reviews-block__item reviews-item">
                    <div class="reviews-block__item-header">
                        <div class="reviews-block__item-img"></div>
                        <div class="reviews-block__item-title">
                            <div class="reviews-block__item-name text text-b">Иванов Иван Иванович</div>
                            <div class="reviews-block__item-job-title text">Генеральный директор ООО «Ромашка»</div>
                        </div>
                    </div>
                    <div class="reviews-block__item-review-text review-text preview-text text">Картельные сговоры не 
                        допускают ситуации, при которой тщательные исследования конкурентов, превозмогая сложившуюся 
                        непростую экономическую ситуацию, призваны к ответу. Сложно сказать, почему действия представителей 
                        оппозиции, вне зависимости от их уровня, должны быть ассоциативно распределены по отраслям. 
                        Имеется спорная точка зрения, гласящая примерно следующее: представители современных социальных 
                        резервов, вне зависимости от их уровня, должны быть разоблачены. Следует отметить, что 
                        высокотехнологичная концепция общественного уклада позволяет выполнить важные задания по разработке 
                        кластеризации усилий. Прежде всего, повышение уровня гражданского сознания обеспечивает широкому 
                        кругу (специалистов) участие в формировании укрепления моральных ценностей.
                    </div>
                    <div class="reviews-block__item-more-btn item-more-btn text">Читать полностью</div>
                </div>
            `;
        }

        this.innerHTML = `
            <div class="reviews-block">
                <div class="container">
                    <h2 class="reviews-block__title">Отзывы</h2>
                    <div class="reviews-block__list">
                        ${reviews}
                    </div>
                    <div class="reviews-block__btn btn btn-y text text-b">
                        <a href="/lstkpromstroy/html/reviews.html">Больше отзывов</a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('reviews-block', ReviewsBlock);