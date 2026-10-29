/*
 * @extends HTMLElement
 * @customElement lstk-projects
 */

import { initNativeScrollSlider } from "../scripts/slider-scroll.js";

export class LSTKProjects extends HTMLElement {

    connectedCallback() {
        this.currentSlide = 0;
        this.slidesToShow = 4;

        const repeatCount = 5;

        this.render(repeatCount);
        this.addListeners(repeatCount);
    }

    render(repeatCount) {

        let projectsItemsHTML = '';

        const projectsSetHTML = `
             <a href="/lstkpromstroy/html/projects-detail.html" class="projects__item-btn-link projects-item-btn-link">
                   <div class="projects__item projects-item">
                        <div class="projects__item-category item-category">Торгово-развлекательный центр</div>
                        <div class="projects__item-img projects-item-img">
                             <div class="projects__item-btn projects-item-btn text">Посмотреть объект</div>
                        </div>
                        <div class="projects__item-title projects-item-title text">Торгово-развлекательный центр<br>«Стрелец»</div>
                   </div>
             </a>
             <a href="/lstkpromstroy/html/projects-detail.html" class="projects__item-btn-link projects-item-btn-link">
                  <div class="projects__item projects-item">
                        <div class="projects__item-category item-category">Склад</div>
                        <div class="projects__item-img projects-item-img">
                             <div class="projects__item-btn projects-item-btn text">Посмотреть объект</div>
                        </div>
                        <div class="projects__item-title projects-item-title text">Склад хранения материалов</div>
                  </div>
             </a>
             <a href="/lstkpromstroy/html/projects-detail.html" class="projects__item-btn-link projects-item-btn-link">
                   <div class="projects__item projects-item">
                        <div class="projects__item-category item-category">Автосервис</div>
                             <div class="projects__item-img projects-item-img">
                        <div class="projects__item-btn projects-item-btn text">Посмотреть объект</div>
                        </div>
                        <div class="projects__item-title projects-item-title text">СТО, г. Красноярск</div>
                        </div>
             </a>
             <a href="/lstkpromstroy/html/projects-detail.html" class="projects__item-btn-link projects-item-btn-link">
                   <div class="projects__item projects-item">
                        <div class="projects__item-category item-category">Комплекс</div>
                             <div class="projects__item-img projects-item-img">
                        <div class="projects__item-btn projects-item-btn text">Посмотреть объект</div>
                        </div>
                        <div class="projects__item-title projects-item-title text">Спортивный комплекс, г. Красноярск</div>
                   </div>
             </a>
        `;

        for (let i = 0; i < repeatCount; i++) {
            projectsItemsHTML += projectsSetHTML;
        }

        this.innerHTML = `
            <div class="projects">

                <div class="projects__slider-arrows slider-arrows">
                    <button class="projects__arrow arrow slider-arrow--left disabled" aria-label="Назад"></button>
                    <button class="projects__arrow arrow slider-arrow--right" aria-label="Вперед"></button>
                </div>
                <div class="container">
                    <h2 class="projects__title">Выполненные проекты</h2>
                    <div class="projects__viewport">
                        <div class="projects__list">${projectsItemsHTML}</div>
                    </div>
                    <div class="projects__pagination"></div>
                    <div class="projects__btn btn btn-y text text-b">
                    <a href="/lstkpromstroy/html/projects.html">Посмотреть все работы</a>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners(repeatCount) {
        const projectsList = this.querySelector('.projects__list');
        const btnLeft = this.querySelector('.slider-arrow--left');
        const btnRight = this.querySelector('.slider-arrow--right');
        const paginationContainer = this.querySelector('.projects__pagination');
        const viewport = this.querySelector('.projects__viewport');
        const totalSlides = 4 * repeatCount;
        const maxScroll = totalSlides - this.slidesToShow;

        if (!projectsList || !btnLeft || !btnRight || !paginationContainer) return;

        for (let i = 0; i <= maxScroll; i++) {
            const dot = document.createElement('button');

            dot.classList.add('projects__dot');
            dot.setAttribute('data-index', i);
            dot.setAttribute('aria-label', `Слайд ${i + 1}`);

            if (i === 0) dot.classList.add('active');

            paginationContainer.appendChild(dot);
        }

        const dots = paginationContainer.querySelectorAll('.projects__dot');

        const updateActiveStates = () => {
            dots.forEach((d, idx) => d.classList.toggle('active', idx === this.currentSlide));
            btnLeft.classList.toggle('disabled', this.currentSlide === 0);
            btnRight.classList.toggle('disabled', this.currentSlide >= maxScroll);
        };

        initNativeScrollSlider(this, viewport, btnLeft, btnRight, updateActiveStates, maxScroll, projectsList)

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {

                const clickedIndex = parseInt(e.target.getAttribute('data-index'), 10);

                if (clickedIndex <= maxScroll) {
                    this.currentSlide = clickedIndex;
                    updateSliderPosition();
                }
            });
        });
    }
}

customElements.define('lstk-projects', LSTKProjects);