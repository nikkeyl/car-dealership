let lockPadding = document.querySelectorAll('[data-lp]');
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
}
export let bodyUnlock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        setTimeout(() => {
            for (let i = 0; i < lockPadding.length; i++) {
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            document.documentElement.classList.remove('lock');
        }, delay);
        bodyLockStatus = false;
        setTimeout(() => {
            bodyLockStatus = true;
        }, delay);
    }
}
export let bodyLock = (delay = 500) => {
    let body = document.querySelector('body');
    if (bodyLockStatus) {
        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = window.innerWidth - document.querySelector('.scaffold').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.scaffold').offsetWidth + 'px';
        document.documentElement.classList.add('lock');
        bodyLockStatus = false;
        setTimeout(() => {
            bodyLockStatus = true;
        }, delay);
    }
}
export function menuInit() {
    if (document.querySelector('.icon-menu')) {
        document.addEventListener('click', (e) => {
            if (bodyLockStatus && e.target.closest('.icon-menu')) {
                bodyLockToggle();
                document.documentElement.classList.toggle('menu-open');
            } else if (bodyLockStatus && !e.target.closest('.menu__body') && !e.target.closest('.menu')) {
                document.documentElement.classList.remove('menu-open');
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.code === 'Escape') {
                document.documentElement.classList.remove('menu-open');
            }
        });
    }
}
export function menuOpen() {
    bodyLock();
    document.documentElement.classList.add('menu-open');
}
export function menuClose() {
    bodyUnlock();
    document.documentElement.classList.remove('menu-open');
}