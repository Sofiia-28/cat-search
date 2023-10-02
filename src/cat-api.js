import axios from "axios";
import Notiflix from 'notiflix';
import {catCard, breedSelect, createCatCardMarkup, createSelectMarkup} from './index.js'
import SlimSelect from 'slim-select'

// new SlimSelect({
//   select: breedSelect,
// })

const API_KEY = "live_Eo9WWuFEbqhH5kqqFsiPK3PaoOXAmftsLGMmpkhH78a4WfAsOyT5TpfWOn12afqP";
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = API_KEY;
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
error.style.display = "none";

export function fetchBreeds() {
    const END_POINT = '/breeds';
    breedSelect.style.display = "none";
  
    return fetch(`${BASE_URL}${END_POINT}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      breedSelect.insertAdjacentHTML("afterBegin", createSelectMarkup(data));
      breedSelect.style.display = "block";
        loader.style.display = "none";
        return 
    })
    .catch((err) => {
      console.log(err);
      loader.style.display = "none";
      Notiflix.Notify.failure(error.textContent);
    })
  }

  export function fetchCatByBreed(breedId) {
    const END_POINT = `/images/search?breed_ids=${breedId}`;
    loader.style.display = "block";
    catCard.style.display = "none";
  
    return fetch(`${BASE_URL}${END_POINT}&api_key=${API_KEY}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
        catCard.insertAdjacentHTML("afterBegin", createCatCardMarkup(data));
        catCard.style.display = "flex";
        loader.style.display = "none";
        return
    })
    .catch((err) => {
      console.log(err);
      loader.style.display = "none";
      Notiflix.Notify.failure(error.textContent);
    })
  }
  
  