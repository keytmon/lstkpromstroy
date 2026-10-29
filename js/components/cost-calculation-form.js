/*
 * @extends HTMLElement
 * @customElement cost-calculation-form
 */

import { initFormValidation, resetFormValidation } from "../scripts/form-validation.js";

export class CostCalculationForm extends HTMLElement {

    connectedCallback() {
        this.render();

        this.openModal = () => {
            this.classList.add('modal--visible');
            document.body.style.overflow = 'hidden';
        };

        this.closeModal = () => {
            this.classList.remove('modal--visible');
            document.body.style.overflow = '';

            const form = this.querySelector('form');
            if (form) resetFormValidation(form);
        };

        this.addListeners();
    }

    render() {

        this.innerHTML = `
            <div class="cost-calculation">
                <div class="container">
                    <button class="cost-calculation__close-btn" id="cost-modal-close">×</button>
                    <div class="cost-calculation__title form-title">Заказать расчёт стоимости</div>
                    <div class="cost-calculation__form">
                        <form method="get" novalidate>
                            <div class="cost-calculation__row">
                                <div class="cost-calculation__field form-field">
                                    <input type="text" name="name" class="input text name" placeholder="Имя *" required>
                                </div>
                                <div class="cost-calculation__field form-field phone-field">
                                    <input type="tel" name="phone" class="input text phone" placeholder="+7 (___) ___-__-__ *" required>
                                </div>
                                <div class="cost-calculation__field form-field">
                                    <input type="email" name="email" class="input text" placeholder="Электронная почта">
                                </div>
                                <div class="cost-calculation__field form-field">
                                    <input type="text" name="size" class="input text size" placeholder="Размеры объекта (Д*Ш*В)">
                                </div>
                                <button  type="submit" class="cost-calculation__btn btn btn-y text text-b">Отправить</button>
                            </div>
                            <div class="cost-calculation__check form-policy">
                            <label class="cost-calculation__checkbox custom-checkbox">
                                <input type="checkbox" class="cost-calculation__input custom-checkbox__input" required>
                                <span class="cost-calculation__checkbox-text custom-checkbox__text">Нажимая кнопку, я принимаю&nbsp;
                                <a href="">соглашение о конфиденциальности</a>&nbsp;и соглашаюсь с&nbsp;<a href="">обработкой персональных
                                    данных</a>.</span>
                            </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }

    addListeners() {
        const closeBtn = this.querySelector('#cost-modal-close');
        const form = this.querySelector('form');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (form) {
            initFormValidation(form, () => {
                alert('Заявка на расчёт стоимости успешно отправлена!');
                this.closeModal();
            });
        }

        this.addEventListener('click', (e) => {
            const isClickInsideForm = e.target.closest('.cost-calculation');

            if (!isClickInsideForm) {
                this.closeModal();
            }
        });
    }
}

customElements.define('cost-calculation-form', CostCalculationForm);