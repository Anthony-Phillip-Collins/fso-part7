import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import blogService from '../../services/blogService';

const initialState = [];

export const getAllBlogs = createAsyncThunk(
  'blog/getAllBlogs',
  async (args, { rejectWithValue }) => {
    try {
      const data = await blogService.getAll();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likeBlog = createAsyncThunk(
  'blog/likeBlog',
  async (id, { rejectWithValue }) => {
    try {
      const data = await blogService.like(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addComment = createAsyncThunk(
  'blog/addComment',
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const data = await blogService.addComment(id, comment);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBlog = createAsyncThunk(
  'blog/deleteBlog',
  async (id, { rejectWithValue }) => {
    try {
      await blogService.remove(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createBlog = createAsyncThunk(
  'blog/createBlog',
  async (blog, { rejectWithValue }) => {
    try {
      const data = await blogService.create(blog);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, () => {
      // console.log('getAllBlogs.pending');
    });
    builder.addCase(
      getAllBlogs.fulfilled,
      (state, action) =>
        // console.log('getAllBlogs.fulfilled', action.payload);
        action.payload
    );
    builder.addCase(getAllBlogs.rejected, () => {
      // console.log('getAllBlogs.rejected');
    });

    builder.addCase(likeBlog.pending, () => {
      // console.log('likeBlog.pending');
    });
    builder.addCase(likeBlog.fulfilled, (state, action) =>
      // console.log('likeBlog.fulfilled', action.payload);
      state.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      )
    );
    builder.addCase(likeBlog.rejected, () => {
      // console.log('likeBlog.rejected');
    });

    builder.addCase(deleteBlog.pending, () => {
      // console.log('deleteBlog.pending');
    });
    builder.addCase(deleteBlog.fulfilled, (state, action) =>
      // console.log('deleteBlog.fulfilled', action.payload);
      state.filter(({ id }) => id !== action.payload)
    );
    builder.addCase(deleteBlog.rejected, () => {
      // console.log('deleteBlog.rejected', action.payload);
    });

    builder.addCase(createBlog.pending, () => {
      // console.log('createBlog.pending');
    });
    builder.addCase(createBlog.fulfilled, (state, action) => {
      // console.log('createBlog.fulfilled', action.payload);
      state.push(action.payload);
    });
    builder.addCase(createBlog.rejected, () => {
      // console.log('createBlog.rejected');
    });

    builder.addCase(addComment.pending, () => {
      // console.log('addComment.pending');
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      const blog = state.find(({ id }) => id === action.payload.id);
      blog.comments = action.payload.comments;
      // console.log('addComment.fulfilled');
    });
    builder.addCase(addComment.rejected, () => {
      // console.log('addComment.rejected');
    });
  },
});

export default blogSlice.reducer;
