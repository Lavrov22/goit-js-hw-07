import { galleryItems } from './gallery-items.js';
// Change code below this line

const galletyRef = document.querySelector('.gallery');
console.log(galletyRef);


const markup = galleryItems.map(({ original, preview, description }) => `  
<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`).join('');

galletyRef.insertAdjacentHTML("beforeend", markup);
let instance;
function onEscKeyPress(e) {
  console.log(e.code)
  if (e.code === 'Escape') {  
    instance.close();
  }
}

function onImgClick(e) {
  e.preventDefault();
  instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}">`, {
    onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) =>{
      window.removeEventListener('keydown', onEscKeyPress);
      },
  }
  )
  instance.show();
};



galletyRef.addEventListener('click', onImgClick);


