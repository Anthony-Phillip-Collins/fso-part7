import { createSlice } from '@reduxjs/toolkit';

export const BlogSortTypes = Object.freeze({
  NONE: 'NONE',
  LIKES_DESCENDING: 'LIKES_DESCENDING',
});

export const blogSortType = createSlice({
  name: 'blogSortType',
  initialState: BlogSortTypes.NONE,
  reducers: {
    sortBlogs: (state, action) => {
      const type = BlogSortTypes[action.payload] && action.payload;
      return type || BlogSortTypes.NONE;
    },
  },
});

export const { sortBlogs } = blogSortType.actions;

export default blogSortType.reducer;
