import {all, call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchMovieList,
  fetchMovieListFailure,
  fetchMovieListSuccess,
} from './action';

function* fetchMovieListSaga() {
  try {
    const movies = yield call(fetchMovieList);
    yield put(fetchMovieListSuccess(movies));
  } catch (error) {
    yield put(fetchMovieListFailure(error.message));
  }
}

function* movieSaga() {
  yield takeLatest('movie/fetchMovieList', fetchMovieListSaga);
}

export default function* rootSaga() {
  yield all([movieSaga()]);
}
