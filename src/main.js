import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImagesApi } from './js/pixabay-api';
import { clearGallery, renderGallery } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  clearGallery();

  const imageName = new FormData(form).get('imageName').trim();

  if (!imageName) {
    return alert('fill the input');
  }
  searchImagesApi(imageName)
    .then(data => {
      const { hits, total } = data;
      if (!hits.length || !total) {
        // izitoast
        return console.log(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      renderGallery(hits);
    })
    //izitoast
    .catch(error => console.error(error.toString()));
  form.reset();
}
