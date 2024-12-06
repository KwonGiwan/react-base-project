import React, { useEffect, useRef, useState } from 'react';
import './style/header.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import loginAction from 'modules/Login';
import { RootReducerType } from 'modules';
import toast from 'react-hot-toast';

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logoutRequest } = loginAction;
  const { isLoggingIn, email } = useSelector(
    (state: RootReducerType) => state.login,
  );
  const myPageNavRef = useRef<HTMLDivElement | null>(null);
  const solutionManageRef = useRef<HTMLDivElement | null>(null);
  const accountManageRef = useRef<HTMLDivElement | null>(null);
  const resourceManageRef = useRef<HTMLDivElement | null>(null);

  const [isDropMenuOpen, setDropMenuOpen] = useState<boolean>(false);
  const [isAccDropMenuOpen, setAccDropMenuOpen] = useState<boolean>(false);
  const [isSolDropMenuOpen, setSolDropMenuOpen] = useState<boolean>(false);
  const [isResDropMenuOpen, setResDropMenuOpen] = useState<boolean>(false);
  const [loginType, setLoginType] = useState<string | null>('');

  useEffect(() => {
    if (!isLoggingIn) {
      navigate('/');
    }
    setLoginType(sessionStorage.getItem('type'));
  }, [isLoggingIn, navigate]);

  useEffect(() => {
    const handleClose = (e: { target: any }) => {
      if (
        isDropMenuOpen &&
        (!myPageNavRef.current || !myPageNavRef.current.contains(e.target))
      )
        setDropMenuOpen(false);
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isDropMenuOpen, pathname]);

  useEffect(() => {
    const handleClose = (e: { target: any }) => {
      if (
        isSolDropMenuOpen &&
        (!solutionManageRef.current ||
          !solutionManageRef.current.contains(e.target))
      )
        setSolDropMenuOpen(false);
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isSolDropMenuOpen, pathname]);

  useEffect(() => {
    const handleClose = (e: { target: any }) => {
      if (
        isAccDropMenuOpen &&
        (!accountManageRef.current ||
          !accountManageRef.current.contains(e.target))
      )
        setAccDropMenuOpen(false);
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isAccDropMenuOpen, pathname]);

  useEffect(() => {
    const handleClose = (e: { target: any }) => {
      if (
        isResDropMenuOpen &&
        (!resourceManageRef.current ||
          !resourceManageRef.current.contains(e.target))
      )
        setResDropMenuOpen(false);
    };
    document.addEventListener('click', handleClose);
    return () => {
      document.removeEventListener('click', handleClose);
    };
  }, [isResDropMenuOpen, pathname]);

  const handleLogout = () => {
    dispatch(logoutRequest());
    navigate('/');
  };

  const readyPage = () => {
    toast.dismiss();
    toast.error('페이지 준비중입니다.');
  };

  const setDropMenu = (sort: string) => {
    if (sort === 'sol') {
      setSolDropMenuOpen(!isSolDropMenuOpen);
      setAccDropMenuOpen(false);
      setResDropMenuOpen(false);
      setDropMenuOpen(false);
    } else if (sort === 'acc') {
      setAccDropMenuOpen(!isAccDropMenuOpen);
      setSolDropMenuOpen(false);
      setResDropMenuOpen(false);
      setDropMenuOpen(false);
    } else if (sort === 'res') {
      setResDropMenuOpen(!isResDropMenuOpen);
      setSolDropMenuOpen(false);
      setAccDropMenuOpen(false);
      setDropMenuOpen(false);
    } else {
      setDropMenuOpen(!isDropMenuOpen);
      setSolDropMenuOpen(false);
      setAccDropMenuOpen(false);
      setResDropMenuOpen(false);
    }
  };
  return (
    <>
      <header className="header-container">
        <div className="logo-container">
          <img
            className="logo"
            src="/images/logo.svg"
            alt="logo"
            onClick={() => navigate('/main')}
          />
        </div>
        {isLoggingIn ? (
          <nav className="nav-container">
            <div ref={solutionManageRef} className="my-application-nav">
              <div
                className="application-container"
                onClick={() => setDropMenu('sol')}
              >
                <span className="application-head">솔루션 관리</span>
                <img
                  className={`arrow-down-icon${
                    isSolDropMenuOpen ? ' open' : ''
                  }`}
                  src="/images/arrow.svg"
                  alt="arrow"
                />
              </div>
              {isSolDropMenuOpen && (
                <div className="my-application-nav-container">
                  <ul className="my-application-nav-list">
                    <li
                      className="my-application-nav-list-item"
                      onClick={() => {
                        navigate(
                          `/solution-manage/industry/customer-list?page=1`,
                        );
                        setSolDropMenuOpen(false);
                      }}
                    >
                      <span className="application-btn">기업보안</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      //onClick={() => moveMyInfo("sdk")}
                      onClick={readyPage}
                    >
                      <span className="application-btn">Generative AI</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      //onClick={() => moveMyInfo("sdk")}
                      onClick={readyPage}
                    >
                      <span className="application-btn">IP Protection</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div ref={accountManageRef} className="my-application-nav">
              <div
                className="application-container"
                onClick={() => setDropMenu('acc')}
              >
                <span className="application-head">사용자 관리</span>
                <img
                  className={`arrow-down-icon${
                    isAccDropMenuOpen ? ' open' : ''
                  }`}
                  src="/images/arrow.svg"
                  alt="arrow"
                />
              </div>
              {isAccDropMenuOpen && (
                <div className="my-application-nav-container">
                  <ul className="my-application-nav-list">
                    <li
                      className="my-application-nav-list-item"
                      onClick={() => {
                        navigate(
                          `/account-manage/industry/customer-list?page=1`,
                        );
                        setAccDropMenuOpen(false);
                      }}
                    >
                      <span className="application-btn">기업보안</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      onClick={readyPage}
                    >
                      <span className="application-btn">Generative AI</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      //onClick={() => moveMyInfo("sdk")}
                      onClick={readyPage}
                    >
                      <span className="application-btn">IP Protection</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div ref={resourceManageRef} className="my-application-nav">
              <div
                className="application-container"
                onClick={() => setDropMenu('res')}
              >
                <span className="application-head">리소스 관리</span>
                <img
                  className={`arrow-down-icon${
                    isResDropMenuOpen ? ' open' : ''
                  }`}
                  src="/images/arrow.svg"
                  alt="arrow"
                />
              </div>
              {isResDropMenuOpen && (
                <div className="my-application-nav-container">
                  <ul className="my-application-nav-list">
                    <li
                      className="my-application-nav-list-item"
                      onClick={() => {
                        navigate(
                          `/resource-manage/industry/resource-list?page=1`,
                        );
                        setResDropMenuOpen(false);
                      }}
                    >
                      <span className="application-btn">기업보안</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      //onClick={() => moveMyInfo("sdk")}
                      onClick={readyPage}
                    >
                      <span className="application-btn">Generative AI</span>
                    </li>
                    <li
                      className="my-application-nav-list-item"
                      //onClick={() => moveMyInfo("sdk")}
                      onClick={readyPage}
                    >
                      <span className="application-btn">IP Protection</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div ref={myPageNavRef} className="my-page-nav">
              <div
                className="user-name-container"
                onClick={() => setDropMenu('user')}
              >
                <span className="user-name">{email}</span>
                <img
                  className={`arrow-down-icon${isDropMenuOpen ? ' open' : ''}`}
                  src="/images/arrow.svg"
                  alt="arrow"
                />
              </div>
              {isDropMenuOpen && (
                <div className="my-page-nav-container">
                  <ul className="my-page-nav-list">
                    <li
                      className="my-page-nav-list-item"
                      onClick={handleLogout}
                    >
                      <span className="log-out-btn">로그아웃</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        ) : (
          <></>
        )}
      </header>
    </>
  );
}
