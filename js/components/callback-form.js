/*
 * @extends HTMLElement
 * @customElement callback-form
 */

import { initFormValidation, resetFormValidation } from "../scripts/form-validation.js";

export class CallbackForm extends HTMLElement {

    connectedCallback() {
        this.render();
        this.addListeners();
    }

    render() {

        this.innerHTML = `
            <div class="callback">
                <div class="callback__content">
                    <div class="callback__form">
                        <div class="callback__form-title form-title">Если остались вопросы, оставьте свои контакты и мы
                            свяжемся с вами</div>
                        <form method="get" novalidate>
                            <div class="callback__field form-field">
                                <input type="text" name="name" class="input text" placeholder="Имя *" required>
                            </div>
                            <div class="callback__field form-field">
                                <input type="tel" name="phone" class="input text" placeholder="+7 (___) ___-__-__ *" required>
                            </div>
                            <div class="callback__field form-field">
                                <input type="email" name="email" class="input text" placeholder="Электронная почта">
                            </div>
                            <div class="callback__field form-field">
                                <input type="text" name="size" class="input text" placeholder="Размеры объекта (Д*Ш*В)">
                            </div>
                            <button type="submit" class="callback__btn btn btn-y text text-b">Отправить</button>
                            <div class="callback__check form-policy">
                                <label class="callback__checkbox custom-checkbox">
                                    <input type="checkbox" class="callback__input custom-checkbox__input" required>
                                    <span class="callback__checkbox-text custom-checkbox__text">
                                        <span>Нажимая кнопку, я принимаю
                                        <a href="">соглашение<br>о конфиденциальности</a> и соглашаюсь с
                                            <a href="">обработкой персональных данных</a>.</span></span>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="callback__img"></div>
                </div>
            </div>
        `;
    }

    addListeners() {
        const form = this.querySelector('form');

        if (form) {
            initFormValidation(form, () => {
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
                resetFormValidation(form);
            });
        }
    }
}

customElements.define('callback-form', CallbackForm);