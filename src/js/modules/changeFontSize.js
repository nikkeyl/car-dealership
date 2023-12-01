import { toggleClasses } from '@js/base/toggleClasses.js';
import { pxToRem } from '@js/base/pxToRem.js';

export function changeFontSize() {
    window.addEventListener('load', () => {
        const range = document.querySelector('[data-change-font-range]');
        const value = document.querySelector('[data-change-font-value]');
        const text = document.querySelector('[data-change-font-item]');
        if (text) {
            if (range && value) {
                pxToRem(text, range.value);
                value.innerHTML = range.value;
                range.oninput = () => {
                    pxToRem(text, range.value);
                    value.innerHTML = range.value;
                }
            }
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.closest('[data-change-font-size]')) {
                    pxToRem(text, el.getAttribute('data-change-font-size'));
                    toggleClasses(el, 'active', '[data-change-font-size].active');
                }
            });
        }
    });
}