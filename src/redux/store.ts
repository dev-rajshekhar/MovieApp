import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import movieReducer from './movieslice';
import rootSaga from './movieSaga';
import {useDispatch} from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
