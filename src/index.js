import {fetchBreeds, fetchCatByBreed} from './cat-api.js'
import SlimSelect from 'slim-select'

export const breedSelect = document.querySelector(".breed-select") 
export const catCard = document.querySelector(".cat-info")

// new SlimSelect({
//   select: breedSelect,
// })

fetchBreeds();
breedSelect.addEventListener("change", chooseCat);

function chooseCat(event) {
    event.preventDefault();
    const breedId = breedSelect.value;
    fetchCatByBreed(breedId);
}

export function createCatCardMarkup(arr) {
    return arr.map(({url, breeds: [{name, description, temperament}]}) =>
    `<img class="cat-image" src="${url}" alt="${name} cat" width="400"/>
    <div class="cat-description"> <h1 class="cat-name">${name}</h1>
    <p>${description}</p>
    <p><b>Temperament: </b>${temperament}</p></div>`
    ).join("")
}

export function createSelectMarkup(arr) {
    return arr.map(({name, id}) => `<option value="${id}">${name}</option>`).join("")
}

