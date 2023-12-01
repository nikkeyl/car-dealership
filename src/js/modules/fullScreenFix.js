import { isMobile } from "@js/base/isMobile.js";

export function fullVHfix() {
    const fullScreens = document.querySelectorAll('[data-fullscreen]');
    if (fullScreens.length && isMobile.any()) {
        window.addEventListener('resize', fixHeight);
        function fixHeight() {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        fixHeight();
    }
}