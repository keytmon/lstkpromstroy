/*
 * @extends HTMLElement
 * @customElement reviews-modal
 */

export class ReviewsModal extends HTMLElement {

    connectedCallback() {
        this.render();
        this.addListeners();
    }

    render() {
        this.innerHTML = `
            <div class="reviews-modal" id="reviews-popup">
                <div class="reviews-modal__overlay"></div>
                <div class="reviews-modal__container" id="modal-step-form">
                    <button class="reviews-modal__close-btn" aria-label="Закрыть">×</button>
                    <div class="reviews-modal__title">Оставьте отзыв</div>
                    <form class="reviews-modal__form" action="#" method="POST">
                        <div class="reviews-modal__field">
                            <label class="reviews-modal__label text">Ваше имя</label>
                            <input type="text" class="reviews-modal__input text" placeholder="Имя" required>
                        </div>
                        <div class="reviews-modal__field">
                            <label class="reviews-modal__label text">Электронная почта</label>
                            <input type="email" class="reviews-modal__input text" placeholder="Электронная почта" required>
                        </div>
                        <div class="reviews-modal__field">
                            <label class="reviews-modal__label text">Изображение рядом с отзывом (ваше фото или логотип компании)</label>
                            <label class="reviews-modal__file-upload">
                                <input type="file" class="reviews-modal__file-input" accept="image/*">
                                <span class="reviews-modal__file-btn text">
                                    <img src="/img/icons/attach.svg" alt="" class="reviews-modal__attach-icon">
                                    Прикрепите файл
                                </span>
                            </label>
                        </div>
                        <div class="reviews-modal__field">
                            <label class="reviews-modal__label text">Ваша оценка</label>
                            <div class="reviews-modal__rating">
                                <div class="reviews-modal__stars">
                                    <span class="reviews-modal__star-interactive" data-value="1">☆</span>
                                    <span class="reviews-modal__star-interactive" data-value="2">☆</span>
                                    <span class="reviews-modal__star-interactive" data-value="3">☆</span>
                                    <span class="reviews-modal__star-interactive" data-value="4">☆</span>
                                    <span class="reviews-modal__star-interactive" data-value="5">☆</span>
                                </div>
                                <span class="reviews-modal__rating-status text" id="rating-status-text">Без оценки</span>
                            </div>
                        </div>
                        <div class="reviews-modal__field">
                            <label class="reviews-modal__label text">Текст отзыва</label>
                            <textarea class="reviews-modal__textarea text" placeholder="Текст" required></textarea>
                        </div>
                        <button type="submit" class="reviews-modal__submit-btn btn btn-y text text-b">Отправить</button>
                    </form>
                    <div class="reviews-modal__policy">
                        Нажимая кнопку вы соглашаетесь на <a href="#">обработку персональных данных</a>
                    </div>
                </div>
                <div class="reviews-modal__container modal__container--success" id="modal-step-success">
                    <button class="reviews-modal__close-btn" aria-label="Закрыть">×</button>
                    <div class="reviews-modal__title">Ваш отзыв успешно отправлен!</div>
                    <div class="reviews-modal__success-text">Он будет опубликован после проверки модератором.</div>
                </div>
            </div>
        `;
    }

    addListeners() {
        const popup = this.querySelector('#reviews-popup');
        const closeButtons = this.querySelectorAll('.reviews-modal__close-btn');
        const overlay = this.querySelector('.reviews-modal__overlay');
        const form = this.querySelector('.reviews-modal__form');
        const stepForm = this.querySelector('#modal-step-form');
        const stepSuccess = this.querySelector('#modal-step-success');
        const stars = this.querySelectorAll('.reviews-modal__star-interactive');
        const statusText = this.querySelector('#rating-status-text');
        const fileInput = this.querySelector('.reviews-modal__file-input');
        const fileBtnText = this.querySelector('.reviews-modal__file-btn');
        const initialFileText = fileBtnText.innerHTML;

        const getScrollbarWidth = () => {
            return window.innerWidth - document.documentElement.clientWidth;
        };

        stars.forEach(star => {
            star.addEventListener('click', (e) => {
                const value = parseInt(e.target.getAttribute('data-value'), 10);

                stars.forEach(s => {
                    const sValue = parseInt(s.getAttribute('data-value'), 10);
                    if (sValue <= value) {
                        s.textContent = '★';
                        s.classList.add('filled');
                    } else {
                        s.textContent = '☆';
                        s.classList.remove('filled');
                    }
                });
                statusText.textContent = `${value} из 5`;
            });
        });

        if (fileInput && fileBtnText) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files.length > 0) {
                    const fileName = e.target.files[0].name;
                    fileBtnText.innerHTML = `
                <img src="/img/icons/attach.svg" alt="скрепка" class="modal__attach-icon">
                ${fileName}
            `;
                    fileBtnText.style.color = '#12223C';
                } else {
                    fileBtnText.innerHTML = initialFileText;
                    fileBtnText.style.color = '';
                }
            });
        }

        this.openModal = () => {
            popup.classList.add('modal--visible');
            stepForm.style.display = 'block';
            stepSuccess.style.display = 'none';
            document.body.style.overflow = 'hidden';
        };

        this.closeModal = () => {
            popup.classList.remove('modal--visible');
            document.body.style.overflow = '';
            fileBtnText.innerHTML = initialFileText;
            fileBtnText.style.color = '';
            form.reset();
            stars.forEach(s => { s.textContent = '☆'; s.classList.remove('filled'); });
            statusText.textContent = 'Без оценки';
        };

        closeButtons.forEach(btn => btn.addEventListener('click', this.closeModal));
        overlay.addEventListener('click', this.closeModal);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            stepForm.style.display = 'none';
            stepSuccess.style.display = 'block';
        });

        this.addEventListener('click', (e) => {
            const isClickInsideForm = e.target.closest('.reviews-modal');

            if (!isClickInsideForm) {
                this.closeModal();
            }
        });
    }
}

customElements.define('reviews-modal', ReviewsModal);