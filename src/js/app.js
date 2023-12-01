import '@scss/style.scss';

import { menuInit } from '@js/components/menu.js'; menuInit();

import { headerScroll } from '@js/modules/scroll/headerScroll.js'; headerScroll();

import { pageNavigation } from '@js/modules/scroll/scroll.js'; pageNavigation();

import { lazyMedia } from '@js/libs/lazyLoad.js'; lazyMedia

import '@js/modules/scroll/watcher.js';

import { webp } from '@js/modules/webp.js'; webp();