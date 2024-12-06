import { throttle } from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function TopBtn() {
  const [isShowing, setShowing] = useState<boolean>(false);

  useEffect(() => {
    const handleTopBtn = throttle(() => {
      window.scrollY > window.innerHeight
        ? setShowing(true)
        : setShowing(false);
    }, 200);
    document.addEventListener('scroll', handleTopBtn, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleTopBtn);
    };
  }, []);

  return (
    <TopBtnContainer
      style={
        isShowing
          ? {
              opacity: 1,
              transform: 'translateY(0)',
              pointerEvents: 'fill',
            }
          : {
              opacity: 0,
              transform: 'translateY(30%)',
              pointerEvents: 'none',
            }
      }
    >
      <img
        src="/images/top-button.svg"
        alt="Go to Top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      />
    </TopBtnContainer>
  );
}

const TopBtnContainer = styled.aside`
  position: fixed;
  right: 3%;
  bottom: 5vh;
  z-index: 10;
  filter: brightness(1.2);
  cursor: pointer;
  transition: 0.5s;
  img {
    width: 72px;
    height: 72px;
    border-radius: 100%;
    filter: drop-shadow(12px 12px 24px rgba(0, 0, 0, 0.16));
    transition: 0.4s;
    &:hover {
      opacity: 0.9;
    }
  }
  &:hover {
    filter: brightness(2);
  }
`;
