export const initFormValidation = (formElement, onSuccessCallback) => {
    if (!formElement) return;

    formElement.setAttribute('novalidate', 'true');

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, '');

        if (digits.startsWith('7') || digits.startsWith('8')) {
            return digits
                .replace(/^(\d)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, (_, p1, p2, p3, p4, p5) => {
                    return `+7 ${p2 ? `(${p2}` : ''}${p2.length === 3 ? ') ' : ''}${p3}${p4 ? `-${p4}` : ''}${p5 ? `-${p5}` : ''}`;
                }).trim();
        }

        return digits
            .replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, (_, p1, p2, p3, p4) => {
                return `+7 ${p1 ? `(${p1}` : ''}${p1.length === 3 ? ') ' : ''}${p2}${p3 ? `-${p3}` : ''}${p4 ? `-${p4}` : ''}`;
            }).trim();
    };

    const allInputs = formElement.querySelectorAll('input');

    allInputs.forEach(input => {

        if (input.type === 'tel') {
            input.addEventListener('input', (e) => {
                e.target.value = formatPhoneNumber(e.target.value).substring(0, 18);
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value.length <= 4) e.target.value = '';
            });
        }

        if (input.type === 'email' || input.name === 'email') {
            input.addEventListener('input', (e) => {

                e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '').toLowerCase();
            });
        }

        if (input.name === 'size') {
            input.addEventListener('input', (e) => {
                let value = e.target.value;

                value = value.replace(/[xXхХ*]/g, 'x');
                value = value.replace(/[^0-9x]/g, '');
                value = value.replace(/(\d)(x)/g, '$1 x ').replace(/(x)(\d)/g, '$1 $2');

                e.target.value = value;
            });

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace') {

                    const val = e.target.value;

                    if (val.endsWith(' x ') || val.endsWith(' x')) {
                        e.target.value = val.slice(0, -3);
                        e.preventDefault();
                    }
                }
            });
        }
    });

    const createErrorIcon = (inputElement, isCheck = false) => {
        const prev = inputElement.previousElementSibling;

        if (prev && prev.classList.contains('form-error-icon')) return;

        const icon = document.createElement('div');

        icon.classList.add('form-error-icon');

        if (isCheck) icon.classList.add('form-error-icon--check');

        icon.innerHTML = `
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15C10.2833 15 10.521 14.904 10.713 14.712C10.905 14.52 11.0007 14.2827 11 14C10.9993 
                    13.7173 10.9033 13.48 10.712 13.288C10.5207 13.096 10.2833 13 10 13C9.71667 13 9.47933 13.096 9.288 
                    13.288C9.09667 13.48 9.00067 13.7173 9 14C8.99933 14.2827 9.09533 14.5203 9.288 14.713C9.48067 
                    14.9057 9.718 15.0013 10 15ZM10 11C10.2833 11 10.521 10.904 10.713 10.712C10.905 10.52 11.0007 
                    10.2827 11 10V6C11 5.71667 10.904 5.47933 10.712 5.288C10.52 5.09667 10.2827 5.00067 
                    10 5C9.71733 4.99933 9.48 5.09533 9.288 5.288C9.096 5.48067 9 5.718 9 6V10C9 10.2833 9.096 10.521 
                    9.288 10.713C9.48 10.905 9.71733 11.0007 10 11ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 
                    18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 
                    0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 
                    2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 
                    0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 
                    3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 
                    12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 
                    13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20Z" fill="#EB1111"/>
            </svg>
        `;

        inputElement.before(icon);
        setTimeout(() => icon.classList.add('is-visible'), 10);
    };

    const removeErrorIcon = (inputElement) => {
        const prev = inputElement.previousElementSibling;

        if (prev && prev.classList.contains('form-error-icon')) {
            prev.classList.remove('is-visible');
            setTimeout(() => prev.remove(), 200);
        }
    };

    const inputs = formElement.querySelectorAll('input[required]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('input-error');

            const parentField = input.parentElement;

            if (parentField) {
                parentField.classList.remove('is-invalid');
            }

            removeErrorIcon(input);
        });

        if (input.type === 'checkbox') {
            input.addEventListener('change', () => {
                if (input.checked) {
                    const label = input.closest('.custom-checkbox');

                    if (label) {
                        label.classList.remove('input-error-check');
                        removeErrorIcon(label);
                    }
                }
            });
        }
    });

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();

        let isFormValid = true;

        inputs.forEach(input => {

                if (input.type !== 'checkbox') {
                    let isInputValid = input.checkValidity();

                    if (input.type === 'tel') {
                        const cleanDigits = input.value.replace(/\D/g, '');

                        if (cleanDigits.length < 11) {
                            isInputValid = false;
                        }
                    }

                    if (!isInputValid) {
                        input.classList.add('input-error');
                        createErrorIcon(input);
                        input.parentElement.classList.add('is-invalid');
                        isFormValid = false;
                    } else {
                        input.classList.remove('input-error');
                        removeErrorIcon(input);
                    }
                }
        });

        const checkbox = formElement.querySelector('input[type="checkbox"][required]');

        if (checkbox) {
            const label = checkbox.closest('.custom-checkbox');

            if (!checkbox.checked) {
                if (label) {
                    label.classList.add('input-error-check');
                    createErrorIcon(label, true);
                }
                isFormValid = false;
            } else if (label) {
                label.classList.remove('input-error-check');
                removeErrorIcon(label);
            }
        }

        if (isFormValid && typeof onSuccessCallback === 'function') {
            onSuccessCallback();
        }
    });
};

export const resetFormValidation = (formElement) => {
    if (!formElement) return;

    formElement.parentElement.querySelectorAll('.form-error-icon').forEach(el => el.remove());
    formElement.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));

    const checkboxContainer = formElement.querySelector('.custom-checkbox');

    if (checkboxContainer) {
        checkboxContainer.classList.remove('input-error-check');
    }

    formElement.reset();
};