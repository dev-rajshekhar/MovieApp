import {createAsyncThunk} from '@reduxjs/toolkit';
import {Movie} from '../api/moviesResponseType';
import {TRENDING_URL} from '../constants/apiUrls';

export const fetchMovieList = createAsyncThunk<Movie[], void>(
  'movie/fetchMovieList',
  async () => {
    const response = await fetch(TRENDING_URL);
    const data = await response.json();
    return data.results;
  },
);

export const fetchMovieListSuccess = (movies: Movie[]) => ({
  type: 'movie/fetchMovieListSuccess',
  payload: movies,
});

export const fetchMovieListFailure = (error: string) => ({
  type: 'movie/fetchMovieListFailure',
  payload: error,
});
