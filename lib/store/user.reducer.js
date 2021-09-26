import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import userAPI from '../api/userAPI';
import { STATUSES } from './helpers';

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  return userAPI.fetchUser();
});

export const register = createAsyncThunk(
  'user/register',
  async ({ signature, publicAddress, username }, { rejectWithValue }) => {
    try {
      const { token, user } = await userAPI.register({
        signature,
        publicAddress,
        username,
      });
      return { token, user };
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async ({ signature, publicAddress }, { rejectWithValue }) => {
    try {
      const { token, user } = await userAPI.login({ signature, publicAddress });
      return { token, user };
    } catch (error) {
      return rejectWithValue(error?.response?.data || error);
    }
  },
);

const initialState = {
  value: null,
  token: null,
  loginAndRegisterStatus: STATUSES.IDLE,
  loginAndRegisterError: null,
};

const loginAndRegisterFulfilledHandler = (state, { payload }) => {
  state.token = payload.token;
  state.value = payload.user;
  state.loginAndRegisterStatus = STATUSES.SUCCEEDED;
  state.loginAndRegisterError = null;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, loginAndRegisterFulfilledHandler);
    builder.addCase(register.fulfilled, loginAndRegisterFulfilledHandler);
    builder.addCase(login.pending, (state) => {
      state.loginAndRegisterStatus = STATUSES.LOADING;
      state.loginAndRegisterError = null;
    });
    builder.addCase(register.pending, (state) => {
      state.loginAndRegisterStatus = STATUSES.LOADING;
      state.loginAndRegisterError = null;
    });
    builder.addCase(login.rejected, (state, { payload }) => {
      state.loginAndRegisterStatus = STATUSES.FAILED;
      state.loginAndRegisterError = payload;
    });
    builder.addCase(register.rejected, (state, { payload }) => {
      state.loginAndRegisterStatus = STATUSES.FAILED;
      state.loginAndRegisterError = payload;
    });
    builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
      state.value = payload;
    });
  },
});

export default userSlice.reducer;
