/*
 * @extends HTMLElement
 * @customElement text-block
 */

import { getDynamicPaths } from "../scripts/dynamic-paths.js";

export class TextBlock extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        const {pagePrefix} = getDynamicPaths();

        this.innerHTML = `
            <div class="main-text-block">
                <div class="container">
                    <h2 class="main-text-block__title">Текстовый блок</h2>
                    <div class="main-text-block__content">
                        <div class="main-text-block__text text">С 2014 года мы занимаемся проектированием и строительством
                            быстровозводимых зданий по технологии ЛСТК. Нами смонтировано и спроектировано более 40 объектов
                            разной конфигурации. Мы возводим объекты складского хранения и сельского хозяйства, торговые и
                            офисные центры, производственные здания с нуля до полной готовности к эксплуатации. Особенно
                            привлекательно каркасное <a href="${pagePrefix}services-detail.html">строительство по технологии ЛСТК</a> для малого
                            и среднего бизнеса. Ввиду скорости возведения сооружений из-за простоты и легкости конструкций,
                            цена материалов и работ существенно ниже, чем затраты на строительство капитальных объектов, что
                            является огромным подспорьем особенно для начинающих предпринимателей, на этапе когда вложения есть,
                            а прибыли еще нет. <a href="${pagePrefix}services-detail.html">Сооружения из ЛСТК</a> надежны, долговечны, а климатические условия
                            эксплуатации имеют широкий диапазон.</div>
                        <div class="main-text-block__img"></div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('text-block', TextBlock);