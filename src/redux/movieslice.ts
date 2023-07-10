import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Movie} from '../api/moviesResponseType';
import {fetchMovieList} from './action';

interface MovieState {
  loading: boolean;
  error: string | null;
  movies: Movie[];
}

const initialState: MovieState = {
  loading: false,
  error: null,
  movies: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovieList.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMovieList.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.loading = false;
          state.error = null;
          state.movies = action.payload;
        },
      )
      .addCase(fetchMovieList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error occurred.';
      });
  },
});

export default movieSlice.reducer;
