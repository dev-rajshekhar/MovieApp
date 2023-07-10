import {API_KEY} from './ApiSecrets';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const TRENDING_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
export const MOVIE_DETAILS_URL = id =>
  `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
