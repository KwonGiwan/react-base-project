import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from 'modules/Login';
import { RootReducerType } from 'modules';
import Main from 'pages/Main';
import Login from 'pages/Login';

export default function CreateRoutes() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { loginSuccess, logoutSuccess } = loginAction;
  const { error } = useSelector((state: RootReducerType) => state.login);

  // 로그인 검증
  useEffect(() => {
    const email = sessionStorage.getItem('email');
    const accessToken = sessionStorage.getItem('accessToken');
    if (
      accessToken === undefined ||
      accessToken === null ||
      accessToken === ''
    ) {
      dispatch(logoutSuccess());
    } else {
      if (error !== null) {
        dispatch(logoutSuccess());
      }
      dispatch(loginSuccess({ email }));
    }
  }, [dispatch, error, loginSuccess, logoutSuccess]);

  // 페이지 이동 시 상단 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<Main />} />
      <Route path="*" element={<Navigate replace to="/main" />} />
    </Routes>
  );
}
