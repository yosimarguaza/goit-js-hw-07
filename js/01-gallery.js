import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.large;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.dataset.source = item.original;

    link.appendChild(image);
    galleryItem.appendChild(link);    
    gallery.appendChild(galleryItem);
});


gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        const source = event.target.dataset.source;

        const lightbox = basicLightbox.create(`<img src="${source}" alt="Image description">`);
        lightbox.show();
    }
});
