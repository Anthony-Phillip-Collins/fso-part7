import { configureStore } from '@reduxjs/toolkit';
import notification from './reducers/notificationSlice';
import blogs from './reducers/blogSlice';
import blogSortType from './reducers/blogSortSlice';
import user from './reducers/userSlice';

const store = configureStore({
  reducer: {
    notification,
    blogs,
    blogSortType,
    user,
  },
});

export default store;
