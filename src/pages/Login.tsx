import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from 'modules';
import loginAction from 'modules/Login';
import modalAction from 'modules/Modal';
import { useCookies } from 'react-cookie';
import Button from 'components/common/Button';
import LoadingDots from 'components/common/LoadingDots';
import Checkbox from 'components/common/Checkbox';
import Field from 'components/common/Field';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface LoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .max(255)
    .email('올바른 이메일 주소를 입력해주세요.')
    .required('이메일을 입력해주세요.'),
  password: Yup.string().max(255).required('비밀번호를 입력해주세요'),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginRequest } = loginAction;
  const { showLoginFailErrorMessage, showLoginSelectFailErrorMessage } =
    modalAction;
  const { loading, error, isLoggingIn } = useSelector(
    (state: RootReducerType) => state.login,
  );
  const [cookie, setCookie, removeCookie] = useCookies();
  const initialIsRemember = cookie.rememberEmail ? true : false;
  const [isShowingPassword, setShowingPassword] = useState<boolean>(false);
  const [isRememberEmail, setRememberEmail] =
    useState<boolean>(initialIsRemember);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: cookie.rememberEmail || '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (values: LoginFormValues) => {
    if (isRememberEmail) {
      setCookie('rememberEmail', values.email, {
        maxAge: 60 * 60 * 24 * 3,
      });
    } else {
      removeCookie('rememberEmail');
    }
    dispatch(loginRequest(values));
  };

  useEffect(() => {
    if (error !== null) {
      if (error.response.status === 404) {
        dispatch(showLoginSelectFailErrorMessage());
      } else {
        dispatch(showLoginFailErrorMessage());
      }
    }
  }, [dispatch, error, showLoginFailErrorMessage]);

  useEffect(() => {
    if (isLoggingIn) {
      navigate('/docs-introduction');
    }
  }, [isLoggingIn, navigate]);

  return (
    <main>
      <div className="loginContainer">
        <div className="loginBox">
          <div className="loginTitle">
            <h3>ADMIN LOGIN</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ul className="loginInputList">
              <li className="loginInputItem">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Field
                      field={field}
                      error={errors.email?.message}
                      placeholder="Email"
                      type="email"
                    />
                  )}
                />
              </li>
              <li className="loginInputItem">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Field
                      field={field}
                      error={errors.password?.message}
                      placeholder="Password"
                      type={isShowingPassword ? 'text' : 'password'}
                    />
                  )}
                />
                {isShowingPassword ? (
                  <span
                    className="showPassword"
                    onClick={() => setShowingPassword(false)}
                  >
                    HIDE
                  </span>
                ) : (
                  <span
                    className="showPassword"
                    onClick={() => setShowingPassword(true)}
                  >
                    SHOW
                  </span>
                )}
              </li>
            </ul>
            <div className="rememberEmailContainer">
              <span
                className={`rememberEmail ${isRememberEmail ? 'active' : ''}`}
                onClick={() => setRememberEmail(!isRememberEmail)}
              >
                <img src="/images/checkbox.svg" alt="checkbox" />
                <span>이메일 기억하기</span>
              </span>
            </div>
            <Button type="submit" fullWidth>
              로그인
            </Button>
          </form>
        </div>
      </div>
      {loading && <LoadingDots />}
    </main>
  );
}
