import { configureStore } from '@reduxjs/toolkit';
import studioReducer from './studioSlice';

const store = configureStore({
  reducer: {
    studio: studioReducer,
  },
});

export default store;
