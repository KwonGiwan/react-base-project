import { put, all, call, takeLatest } from 'redux-saga/effects';
import loginAction from 'modules/Login';
import axios from 'axios';
import apiUrl from 'utils/apis';

const BASIC_URI = process.env.REACT_APP_BASIC_URI;

export type LoginPayload = {
  email: string;
  password: string;
  name?: string;
  position?: string;
  phone?: string;
};

// 로그인
function* login(action: { payload: LoginPayload }) {
  const { loginSuccess, loginFailure } = loginAction;
  try {
    yield call(() =>
      axios
        .post(BASIC_URI + apiUrl.signIn, action.payload, {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          const { accessToken } = response.data;
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('email', action.payload.email);
          axios.defaults.headers.common['Authorization'] =
            `Bearer ${accessToken}`;
        }),
    );

    yield put(loginSuccess({ email: action.payload.email }));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

// 로그아웃
function* logout() {
  const { logoutSuccess, logoutFailure } = loginAction;
  try {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('type');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('position');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('phone');
    sessionStorage.removeItem('department');
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailure(err));
  }
}

export function* getLoginSaga() {
  const { loginRequest, logoutRequest } = loginAction;
  yield all([
    takeLatest(loginRequest, login),
    takeLatest(logoutRequest, logout),
  ]);
}
