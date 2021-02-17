import gallery from "./gallery-items.js";

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. 
// Это необходимо для того, чтобы при следующем открытии модального окна, 
// пока грузится изображение, мы не видели предыдущее.


const galleryRef = document.querySelector('.js-gallery');
const divLightboxRef = document.querySelector('.lightbox');
const lightboxImageRef = document.querySelector('.lightbox__image');
const closeLightBoxBtn = document.querySelector('.lightbox__button');
console.log(galleryRef);

galleryRef.insertAdjacentHTML('beforeend', createCardsMarkup(gallery));
galleryRef.addEventListener('click', onImgClick);
closeLightBoxBtn.addEventListener('click', onCloseBtnClick);

function createCardsMarkup(gallery) {
    return gallery.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
            <a
                class="gallery__link"
                href='${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'/>
            </a>
      </li>`;
      }).join('');
  };
  
function onImgClick (event) {
    event.preventDefault();

    const target = event.target;

    divLightboxRef.classList.add('is-open');
    lightboxImageRef.src = target.dataset.source;
};

function onCloseBtnClick (event) {
    divLightboxRef.classList.remove('is-open')
    console.log(closeLightBoxBtn)
}