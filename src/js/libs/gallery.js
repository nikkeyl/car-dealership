import { routeObjects } from "@js/base/routeObjects.js";
import lightGallery from 'lightgallery';

//import lgThumbnail from 'lightgallery/plugins/thumbnail/lg-thumbnail.min.js'
//import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'

import '@scss/libs/gallery/lightgallery.scss';
//import '@scss/libs/gallery/lg-relative-caption.scss';
//import '@scss/libs/gallery/lightgallery-bundle.scss';
//import '@scss/libs/gallery/lg-medium-zoom.scss';
//import '@scss/libs/gallery/lg-fullscreen.scss';
//import '@scss/libs/gallery/lg-thumbnail.scss';
//import '@scss/libs/gallery/lg-autoplay.scss';
//import '@scss/libs/gallery/lg-comments.scss';
//import '@scss/libs/gallery/lg-rotate.scss';
//import '@scss/libs/gallery/lg-video.scss';
//import '@scss/libs/gallery/lg-pager.scss';
//import '@scss/libs/gallery/lg-share.scss';
//import '@scss/libs/gallery/lg-zoom.scss';

const galleries = document.querySelectorAll('[data-gallery]');
if (galleries.length) {
    let galleryItems = [];
    galleries.forEach(gallery => {
        galleryItems.push({
            gallery,
            galleryClass: lightGallery(gallery, {
                // plugins: [lgZoom, lgThumbnail],
                licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
                speed: 500,
            })
        })
    });
    routeObjects.gallery = galleryItems;
}