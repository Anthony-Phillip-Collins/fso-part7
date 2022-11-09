import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import loginService from '../../services/loginService';

const initialState = loginService.getUser();

export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const data = await loginService.login({ username, password });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => {
      loginService.logout();
      return null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, () => {
      // console.log('user/login.pending');
    });
    builder.addCase(login.fulfilled, (state, action) => {
      // console.log('user/login.fulfilled', action.payload);
      loginService.setUser(action.payload);
      return loginService.getUser();
    });
    builder.addCase(login.rejected, () => {
      // console.log('user/login.rejected', state, action.payload);
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
