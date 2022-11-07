// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector('.gallery')
const gMarkUp = createMarkUp(galleryItems)

galleryList.insertAdjacentHTML('beforeend', gMarkUp)
galleryList.addEventListener('click', onPictureClick);

function createMarkUp(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<ul class="gallery"> 
        <li class = "some"> <a class="gallery__item" href="${original}">
        <img class="gallery__image some" src="${preview}" alt="${description}"/></a>
        </li>
        </ul>`;
    })
        .join('')
}
// function onPictureClick(evt) {
//     evt.preventDefault();
//     const picSpace = evt.target.classList.contains('gallery__image')
//     if (!picSpace) {
//      return;   
//     } 
//     new SimpleLightbox('.some a', {
//         captionsData: 'alt',
//         captionDelay: 250
//     });
// }   

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, showCounter:false,captionsData:'alt'});

console.log(galleryItems);
