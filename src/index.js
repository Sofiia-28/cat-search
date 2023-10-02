import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

export const breedSelect = document.querySelector('.breed-select');
export const catCard = document.querySelector('.cat-info');
export const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
error.style.display = 'none';

fetchBreeds()
  .then(data => {
    breedSelect.insertAdjacentHTML('afterBegin', createSelectMarkup(data));
    breedSelect.style.display = 'block';
    loader.style.display = 'none';
    return;
  })
  .catch(err => {
    console.log(err);
    loader.style.display = 'none';
    Notiflix.Notify.failure(error.textContent);
  });

breedSelect.addEventListener('change', chooseCat);

function chooseCat(event) {
  event.preventDefault();
  const breedId = breedSelect.value;
  fetchCatByBreed(breedId)
    .then(data => {
      catCard.innerHTML = '';
      catCard.insertAdjacentHTML('afterBegin', createCatCardMarkup(data));
      catCard.style.display = 'flex';
      loader.style.display = 'none';
      return;
    })
    .catch(err => {
      console.log(err);
      loader.style.display = 'none';
      Notiflix.Notify.failure(error.textContent);
    });
}

export function createCatCardMarkup(arr) {
  return arr
    .map(
      ({ url, breeds: [{ name, description, temperament }] }) =>
        `<img class="cat-image" src="${url}" alt="${name} cat" width="400"/>
    <div class="cat-description"> <h1 class="cat-name">${name}</h1>
    <p>${description}</p>
    <p><b>Temperament: </b>${temperament}</p></div>`
    )
    .join('');
}

export function createSelectMarkup(arr) {
  return arr
    .map(({ name, id }) => `<option value="${id}">${name}</option>`)
    .join('');
}
