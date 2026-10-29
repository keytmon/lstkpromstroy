/*
 * @extends HTMLElement
 * @customElement callback-modal
 */

import { initFormValidation, resetFormValidation } from "../scripts/form-validation.js";

export class CallbackModal extends HTMLElement {
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
            <div class="callback-modal">
                <div class="callback-modal__overlay"></div>
                <div class="callback-modal__container">
                    <button class="callback-modal__close-btn" id="callback-close">×</button>
                    <div class="callback-modal__title form-title">Обратный звонок</div>
                    <form class="callback-modal__form" method="POST" action="#" novalidate>
                        <div class="callback-modal__field form-field">
                            <input type="text" name="name" class="callback-modal__input input text" placeholder="Имя *" required>
                        </div>
                        <div class="callback-modal__field form-field">
                            <input type="tel" name="phone" class="callback-modal__input input text" placeholder="+7 (000) 000 00 00 *" required id="callback-phone-input">
                        </div>
                        <button type="submit" class="callback-modal__submit-btn btn btn-y text text-b">Отправить</button>
                        <div class="callback-modal__policy form-policy">
                            <label class="callback-modal__checkbox custom-checkbox">
                                <input type="checkbox" class="callback-modal__input custom-checkbox__input" required>
                                <span class="callback-modal__checkbox-text custom-checkbox__text">Нажимая кнопку, я принимаю
                                        <a href="">соглашение о конфиденциальности</a> и соглашаюсь с
                                            <a href="">обработкой персональных данных</a>.
                                </span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        `;
    }

    addListeners() {
        const closeBtn = this.querySelector('#callback-close');
        const overlay = this.querySelector('.callback-modal__overlay');
        const form = this.querySelector('form');

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        if (overlay) {
            overlay.addEventListener('click', () => this.closeModal());
        }

        if (form) {
            initFormValidation(form, () => {
                alert('Заявка на обратный звонок успешно отправлена!');
                this.closeModal();
            });
        }
    }
}

customElements.define('callback-modal', CallbackModal);