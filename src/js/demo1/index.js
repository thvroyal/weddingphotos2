import {preloadImages, preloadFonts} from '../utils';
import Cursor from '../cursor';
import 'regenerator-runtime/runtime'
import GalleryController from './galleryController';

const gallery = document.getElementById("showGallery");

function convertNumber(index) {
    let no = index + 1;
    if (no < 10) return '0' + no; else return no;
}

async function getPhotos(url) {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Client-ID f53d1fa9b2553c0'
        }
    });
    return await response.json();
}

function showPhotos() {
    getPhotos(`https://api.imgur.com/3/album/lnyLIDE`)
        .then(data => {
            const images = data.data.images.slice(0,10);
            // print node image on HTML
            images ? images.map((image, index) => {
                let element = `<figure class="gallery__item">
                <div class="gallery__item-img"><div class="gallery__item-imginner" style="background-image: url(${image.link})"></div></div>
                <figcaption class="gallery__item-caption">
                    <h2 class="gallery__item-title" data-scroll data-scroll-speed="2" data-splitting></h2>
                    <span class="gallery__item-number">${convertNumber(index)}</span>
                    <p class="gallery__item-text"><a href="${image.link}" target="_blank"><i class="fas fa-cloud-download-alt"></i>  Download</a></p>
                    <p class="gallery__item-text gallery__item-view">${image.views} views</p>
                </figcaption>
            </figure>`;
                gallery.insertAdjacentHTML('beforeend', element);
            }) : null
        })
        .then(function () {
            // Preload images and fonts
            Promise.all([preloadImages('.gallery__item-imginner'), preloadFonts('lty4rfv')]).then(() => {
                // Remove loader (loading class)
                document.body.classList.remove('loading');

                // Initialize custom cursor
                const cursor = new Cursor(document.querySelector('.cursor'));

                // Initialize the GalleryController
                new GalleryController(document.querySelector('.gallery'));

                // Mouse effects on all links and others
                [...document.querySelectorAll('a, .gallery__item-img')].forEach(link => {
                    link.addEventListener('mouseenter', () => cursor.enter());
                    link.addEventListener('mouseleave', () => cursor.leave());
                });
            });
        })
}

window.onload = function () {
    if (window.localStorage.getItem('fun8232') !== '102') window.location.replace('form-question.html'); else
    showPhotos();
}
