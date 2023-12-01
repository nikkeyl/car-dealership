import { isMobile } from "@js/base/isMobile.js";

export function addTouchClass() {
    if (isMobile.any()) document.documentElement.classList.add('touch');
}