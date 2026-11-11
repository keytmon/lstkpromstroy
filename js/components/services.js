/*
 * @extends HTMLElement
 * @customElement lstk-services
 */

export class LSTKServices extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        const breadcrumb = document.querySelector('.breadcrumbs__item:last-child');
        const pageTitle = breadcrumb ? breadcrumb.textContent : 'Заголовок';

        this.innerHTML = `
            <div class="our-services">
                <div class="container">
                    <h1 class="our-services__title title">${pageTitle}</h1>
                    <div class="our-services__list">
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img shops">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Строительство магазинов из ЛСТК</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img office-buildings">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Офисные здания, торговые здания, комплексы, центры</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img autocomplexes">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Автокомплексы</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img warehouses">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Склады, ангары</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img agricultural-facilities">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Объекты сельхоз назначения</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                        <a href="./services-detail.html" class="our-services__item-btn-link">
                            <div class="our-services__item">
                                <div class="our-services__item-img item-img industrial-buildings">
                                    <div class="our-services__item-btn services-item-btn text">Подробнее</div>
                                </div>
                                <div class="our-services__item-title text">Производственные здания</div>
                                <div class="our-services__item-price text">От ХХХ ₽</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('lstk-services', LSTKServices);