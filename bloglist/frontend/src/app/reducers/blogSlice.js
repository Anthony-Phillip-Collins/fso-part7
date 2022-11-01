import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogService from '../../services/blogService';

const initialState = [];

export const getAllBlogs = createAsyncThunk('blog/getAllBlogs', async () => {
  const data = await blogService.getAll();
  return data;
});

export const likeBlog = createAsyncThunk('blog/likeBlog', async (id) => {
  const data = await blogService.like(id);
  return data;
});

export const deleteBlog = createAsyncThunk('blog/deleteBlog', async (id) => {
  await blogService.remove(id);
  return id;
});

export const createBlog = createAsyncThunk('blog/createBlog', async (blog) => {
  const data = await blogService.create(blog);
  return data;
});

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, () => {
      console.log('getAllBlogs.pending');
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      console.log('getAllBlogs.fulfilled', action.payload);
      return action.payload;
    });
    builder.addCase(getAllBlogs.rejected, () => {
      console.log('getAllBlogs.rejected');
    });

    builder.addCase(likeBlog.pending, () => {
      console.log('likeBlog.pending');
    });
    builder.addCase(likeBlog.fulfilled, (state, action) => {
      console.log('likeBlog.fulfilled', action.payload);
      return state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    });
    builder.addCase(likeBlog.rejected, () => {
      console.log('likeBlog.rejected');
    });

    builder.addCase(deleteBlog.pending, () => {
      console.log('deleteBlog.pending');
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
      console.log('deleteBlog.fulfilled', action.payload);
      return state.filter(({ id }) => id !== action.payload);
    });
    builder.addCase(deleteBlog.rejected, () => {
      console.log('deleteBlog.rejected');
    });

    builder.addCase(createBlog.pending, () => {
      console.log('createBlog.pending');
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      console.log('createBlog.fulfilled', action.payload);
      state.push(action.payload);
    });
    builder.addCase(createBlog.rejected, () => {
      console.log('createBlog.rejected');
    });
  },
});

export default blogSlice.reducer;
