/*
 * @extends HTMLElement
 * @customElement lstk-clients
 */

import { initNativeScrollSlider } from "../scripts/slider-scroll.js";

export class LSTKClients extends HTMLElement {

    connectedCallback() {
        this.currentSlide = 0;
        this.totalSlides = 9;
        this.slidesToShow = 4;

        this.render();
        this.addListeners();
    }

    render() {

        let clientsItemsHTML = '';

        for (let i = 1; i <= this.totalSlides; i++) {
            clientsItemsHTML += `
                <div class="clients__item">
                    <div class="clients__item-title">Лого</div>
                </div>
            `;
        }

        this.innerHTML = `
            <div class="clients">
                <div class="clients__slider-arrows slider-arrows">
                    <button class="clients__arrow arrow slider-arrow--left disabled" aria-label="Назад"></button>
                    <button class="clients__arrow arrow slider-arrow--right" aria-label="Вперед"></button>
                </div>
                <div class="container">
                
                    <h2 class="clients__title">Нам доверяют</h2>
                    <div class="clients__viewport">
                        <div class="clients__list">${clientsItemsHTML}</div>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners() {
        const clientsList = this.querySelector('.clients__list');
        const btnLeft = this.querySelector('.slider-arrow--left');
        const btnRight = this.querySelector('.slider-arrow--right');
        const viewport = this.querySelector('.clients__viewport');

        if (!clientsList || !btnLeft || !btnRight) return;

        const maxScroll = this.totalSlides - this.slidesToShow;

        const updateActiveStates = () => {
            btnLeft.classList.toggle('disabled', this.currentSlide === 0);
            btnRight.classList.toggle('disabled', this.currentSlide >= maxScroll);
        };

        initNativeScrollSlider(this, viewport, btnLeft, btnRight, updateActiveStates, maxScroll, clientsList)
    }
}

customElements.define('lstk-clients', LSTKClients);