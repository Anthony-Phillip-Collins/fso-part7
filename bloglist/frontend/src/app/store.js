import { configureStore } from '@reduxjs/toolkit';
import notification from './reducers/notificationSlice';

const store = configureStore({
  reducer: {
    notification,
  },
});

export default store;
