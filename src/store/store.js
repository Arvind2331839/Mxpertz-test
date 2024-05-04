// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import storyReducer from './slice';

export const store = configureStore({
  reducer: {
    stories: storyReducer,
  },
});

