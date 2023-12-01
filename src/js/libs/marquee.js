import marquee from 'vanilla-marquee';

const elem = document.querySelector('[data-marquee]');
if (elem) {
    new marquee(elem, {
        css3easing: 'linear',
        delayBeforeStart: 1000,
        direction: 'left',
        duplicated: true,
        // duration: 15000,
        speed: 100,
        gap: 20,
        pauseOnHover: true,
        startVisible: true,
        recalcResize: true
    })
}