import { configureStore } from '@reduxjs/toolkit';
import anecdotes from '../features/anecdoteSlice';
import notification from '../features/notificationSlice';

export const store = configureStore({
  reducer: {
    anecdotes,
    notification,
  },
});
