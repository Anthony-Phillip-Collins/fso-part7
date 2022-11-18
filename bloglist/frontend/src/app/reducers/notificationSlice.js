import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = { text: '' };
let timeoutId;

export const setNotification = createAsyncThunk(
  'notification/setNotification',
  async (args, { dispatch }) => {
    const delay = args.delay || 5000;
    const error =
      args?.response?.data?.error ||
      args?.error?.response?.data?.error ||
      args?.error;
    let isError = args.isError === true;
    let message = args.text;

    if (error) {
      message =
        error.message || 'There has been an error. Please try again later.';
      isError = true;
    }

    if (typeof args === 'string') {
      message = args;
    }

    if (message) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => dispatch(setNotification('')), delay);
    }
    return { text: message, isError };
  }
);

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(setNotification.pending, (state, action) => {
      // console.log('setNotification.pending');
    });
    // eslint-disable-next-line no-unused-vars
    builder.addCase(
      setNotification.fulfilled,
      (state, action) =>
        // console.log('setNotification.fulfilled');
        action.payload
    );
    // eslint-disable-next-line no-unused-vars
    builder.addCase(setNotification.rejected, (state, action) => {
      // console.log('setNotification.rejected');
    });
  },
});

export default notificationSlice.reducer;
