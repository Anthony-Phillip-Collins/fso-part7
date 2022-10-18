import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { text: '' };
let timeoutId;

export const setNotification = createAsyncThunk(
  'notification/setNotification',
  async ({ text, delay = 5000 }, { dispatch }) => {
    if (text) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => dispatch(setNotification('')), delay);
    }
    return { text };
  }
);

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clear: (state, action) => {
      state.text = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setNotification.pending, (state, action) => {
      console.log('setNotification.pending');
    });
    builder.addCase(setNotification.fulfilled, (state, action) => {
      console.log('setNotification.fulfilled');

      return action.payload;
    });
    builder.addCase(setNotification.rejected, (state, action) => {
      console.log('setNotification.rejected');
    });
  },
});

export const { clear } = notificationSlice.actions;

export default notificationSlice.reducer;
