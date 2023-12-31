import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => { 
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}).join('');

galleryList.insertAdjacentHTML("beforeend",markup);


const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});
