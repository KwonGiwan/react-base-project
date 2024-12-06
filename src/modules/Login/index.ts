import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload } from './sagas';
export * from './sagas';

type LoginState = {
  loading: boolean;
  isLoggingIn: boolean | null;
  email: string;
  error: any | null;
};

const initialState: LoginState = {
  loading: false,
  isLoggingIn: null,
  email: '',
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.loading = true;
      state.isLoggingIn = null;
      state.email = '';
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.email = action.payload.email;
      state.isLoggingIn = true;
    },
    loginFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
    logoutRequest: (state) => {
      state.loading = true;
      state.isLoggingIn = null;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.isLoggingIn = false;
      state.email = '';
      state.error = null;
    },
    logoutFailure: (state, { payload: error }) => {
      state.loading = false;
      state.error = error;
    },
  },
});

const loginAction = loginSlice.actions;
export default loginAction;

export const login = loginSlice.reducer;
