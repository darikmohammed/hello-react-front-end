import { configureStore } from '@reduxjs/toolkit';
import Greeting from './Greeting/Greeting';

export const store = configureStore({
  reducer: {
    Greeting,
  },
});

export default store;
