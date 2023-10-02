import axios from 'axios';

import {
  catCard,
  breedSelect,
  loader,
} from './index.js';

const API_KEY =
  'live_Eo9WWuFEbqhH5kqqFsiPK3PaoOXAmftsLGMmpkhH78a4WfAsOyT5TpfWOn12afqP';
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = API_KEY;


export function fetchBreeds() {
  const END_POINT = '/breeds';
  breedSelect.style.display = 'none';

  return fetch(`${BASE_URL}${END_POINT}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
}

export function fetchCatByBreed(breedId) {
  const END_POINT = `/images/search?breed_ids=${breedId}`;
  loader.style.display = 'block';
  catCard.style.display = 'none';

  return fetch(`${BASE_URL}${END_POINT}&api_key=${API_KEY}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
}
