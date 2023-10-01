import axios from "axios";
// import fetchBreeds from './cat-api.js'

axios.defaults.headers.common["x-api-key"] = "live_Eo9WWuFEbqhH5kqqFsiPK3PaoOXAmftsLGMmpkhH78a4WfAsOyT5TpfWOn12afqP";

const catCard = document.querySelector(".cat-info")
const breedSelect = document.querySelector(".breed-select")

function fetchBreeds() {
    const BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';
  
    return fetch(`${BASE_URL}${END_POINT}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
  }

//   function fetchCatByBreed(breedId) {
//     return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
//     .then(resp => {
//       if (!resp.ok) {
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     });
//   }

fetchBreeds().then((data) => {
    // catCard.insertAdjacentHTML("afterBegin", createCatCardMarkup(data));
    breedSelect.insertAdjacentHTML("afterBegin", createSelectMarkup(data));
});

// function createCatCardMarkup(arr) {
//     return arr.map(({name, description, temperament, id, reference_image_id
//     }) => `<h1 class="cat-name">${name}</h1>
//     <p class="cat-description">${description}</p>
//     <p class="cat-description"><span class="cat-temperament">Temperament: </span>${temperament}</p>
//     <img class="cat-image" src="https://cdn2.thecatapi.com/images/${reference_image_id}.jpg" alt="${name} cat"`).join("")
// }

function createSelectMarkup(arr) {
    return arr.map(({name, id}) => `<option id="${id}">${name}</option>`).join("")
}

breedSelect.addEventListener("change", chooseCat);

function chooseCat(event) {


}