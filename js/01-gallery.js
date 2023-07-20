import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a href="${original}" class="gallery__link">
      <img
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        class="gallery__image"
      />
    </a>
  </li>`;
}).join('');

galleryList.innerHTML = markup;

//  делегування подій на img
galleryList.addEventListener('click', (event) => {
  event.preventDefault(); 
    if (event.target.tagName !== 'IMG') return;
    const largeImageUrl = event.target.dataset.source;
    const lightbox = basicLightbox.create(`<img src ="${largeImageUrl}">`);
    
    lightbox.show();
    document.addEventListener("keydown", closeWithEsc)
}
    
);

function closeWithEsc(e) {
    const modal = 
    if(e.code === "Escape") {
        modal.close();
        document.removeEventListener("keydown", closeWithEsc)
    }
   
}