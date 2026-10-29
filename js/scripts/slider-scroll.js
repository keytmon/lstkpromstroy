export const initNativeScrollSlider = (instance, viewport, btnLeft, btnRight, updateActiveStates, maxScroll, track) => {

    const firstCard = track.children[0];
    const stepInPixels = firstCard
        ? (firstCard.offsetWidth + parseInt(window.getComputedStyle(track).gap || 0, 10))
        : 360;

    const updateSliderPosition = () => {
        if (viewport) {
            viewport.scrollTo({
                left: instance.currentSlide * stepInPixels,
                behavior: 'smooth'
            });
        }
        updateActiveStates();
    };

    if (viewport) {
        viewport.addEventListener('scroll', () => {
            const calculatedSlide = Math.round(viewport.scrollLeft / stepInPixels);

            if (calculatedSlide !== instance.currentSlide && calculatedSlide <= maxScroll && calculatedSlide >= 0) {
                instance.currentSlide = calculatedSlide;
                updateActiveStates();
            }
        }, {passive: true});

        let isDown = false;
        let startX, scrollLeft;

        viewport.addEventListener('mousedown', (e) => {
            isDown = true;
            viewport.style.scrollBehavior = 'auto';
            startX = e.pageX - viewport.offsetLeft;
            scrollLeft = viewport.scrollLeft;
        });

        const stopDragging = () => {

            if (!isDown) return;

            isDown = false;
            viewport.style.scrollBehavior = 'smooth';

            instance.currentSlide = Math.round(viewport.scrollLeft / stepInPixels);
        };

        viewport.addEventListener('mouseleave', stopDragging);
        viewport.addEventListener('mouseup', stopDragging);

        viewport.addEventListener('mousemove', (e) => {

            if (!isDown) return;

            e.preventDefault();

            const x = e.pageX - viewport.offsetLeft;
            const walk = (x - startX) * 1.3;

            viewport.scrollLeft = scrollLeft - walk;
        });
    }

    btnRight.addEventListener('click', () => {
        if (instance.currentSlide < maxScroll) {
            instance.currentSlide++;
            updateSliderPosition();
        }
    });

    btnLeft.addEventListener('click', () => {
        if (instance.currentSlide > 0) {
            instance.currentSlide--;
            updateSliderPosition();
        }
    });
};