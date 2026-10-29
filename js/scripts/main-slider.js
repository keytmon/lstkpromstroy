import { initNativeScrollSlider } from "./slider-scroll.js";

export const initHeroSlider = () => {

    const viewport = document.querySelector('.slider__viewport');
    const track = document.querySelector('.slider__track');
    const btnLeft = document.querySelector('.slider-arrow--left');
    const btnRight = document.querySelector('.slider-arrow--right');
    const paginationContainer = document.querySelector('.slider__pagination');

    if (!viewport || !track || !btnLeft || !btnRight || !paginationContainer) return;

    const instance = {currentSlide: 0};
    const totalSlides = track.children.length;
    const maxScroll = totalSlides - 1;

    for (let i = 0; i <= maxScroll; i++) {

        const dot = document.createElement('button');

        dot.classList.add('slider__dot');
        dot.setAttribute('data-index', i);
        dot.setAttribute('aria-label', `Слайд ${i + 1}`);

        if (i === 0) dot.classList.add('active');

        paginationContainer.appendChild(dot);
    }

    const dots = paginationContainer.querySelectorAll('.slider__dot');

    const updateActiveStates = () => {
        dots.forEach((dot, idx) => dot.classList.toggle('active', idx === instance.currentSlide));
        btnLeft.classList.toggle('disabled', instance.currentSlide === 0);
        btnRight.classList.toggle('disabled', instance.currentSlide >= maxScroll);
    };

    const getSlideWidth = () => {
        return track.firstElementChild
            ? track.firstElementChild.getBoundingClientRect().width
            : viewport.offsetWidth;
    };

    const updateSliderPosition = () => {
        if (viewport) {
            viewport.scrollTo({
                left: instance.currentSlide * viewport.offsetWidth,
                behavior: 'smooth'
            });
        }
        updateActiveStates();
    };

    initNativeScrollSlider(instance, viewport, btnLeft, btnRight, updateActiveStates, maxScroll, track);

    viewport.addEventListener('scroll', () => {

        const calculatedSlide = Math.round(viewport.scrollLeft / getSlideWidth());

        if (calculatedSlide !== instance.currentSlide && calculatedSlide <= maxScroll && calculatedSlide >= 0) {
            instance.currentSlide = calculatedSlide;
            updateActiveStates();
        }
    }, { passive: true });

    btnRight.addEventListener('click', (e) => {

        e.stopImmediatePropagation();

        if (instance.currentSlide < maxScroll) {
            instance.currentSlide++;
            updateSliderPosition();
        }
    }, {capture: true});

    btnLeft.addEventListener('click', (e) => {

        e.stopImmediatePropagation();

        if (instance.currentSlide > 0) {
            instance.currentSlide--;
            updateSliderPosition();
        }
    }, {capture: true});

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const clickedIndex = parseInt(e.target.getAttribute('data-index'), 10);

            if (clickedIndex <= maxScroll) {
                instance.currentSlide = clickedIndex;
                updateSliderPosition();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (viewport) {
            viewport.style.scrollSnapType = 'none';
            viewport.style.scrollBehavior = 'auto';
            viewport.scrollLeft = instance.currentSlide * getSlideWidth();

            requestAnimationFrame(() => {
                viewport.style.scrollSnapType = 'x mandatory';
            });
        }
    });

};