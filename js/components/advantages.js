/*
 * @extends HTMLElement
 * @customElement lstk-advantages
 */

export class LSTKAdvantages extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {

        this.innerHTML = `
            <div class="advantages">
                <div class="container">
                    <div class="advantages__text">
                        <div class="advantages__title">Преимущества</div>
                        <div class="advantages__subtitle">строительства из ЛСТК</div>
                        <div class="advantages__description text">Вес каркаса и готовых зданий из ЛСТК-профиля в разы меньше, чем
                            аналогичные строения из камня и дерева. Благодаря данному преимуществу, при постройке нового здания
                            существенно снижаются растраты на фундамент, расширяются возможности проведения строительства на
                            сложных грунтах. ЛСТК-технология значительно упрощает реконструкцию старых строений, в том числе
                            весьма ослабленных и аварийных.
                        </div>
                    </div>
                    <div class="advantages__list">
                         <div class="advantages__item item text">Доступная цена и высокое качество</div>
                         <div class="advantages__item item text">Высокая скорость строительства</div>
                         <div class="advantages__item item text">Долговечность и сейсмоустойчивость</div>
                         <div class="advantages__item item text">Возможность зимнего строительства</div>
                         <div class="advantages__item item text">Комплектная поставка</div>
                         <div class="advantages__item item text">Неограниченные размеры</div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('lstk-advantages', LSTKAdvantages);