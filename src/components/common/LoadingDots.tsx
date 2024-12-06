import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function LoadingDots() {
  return (
    <LoadingContainer>
      <div className="loadingBox">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </LoadingContainer>
  );
}

const bounce = keyframes`
  0%{transform: translateY(0);}
  50%{transform: translateY(-70%);}
  70%{transform: translateY(-300%);}
  100%{transform: translateY(0);}
`;

const LoadingContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.bgModal};
  display: flex;
  justify-content: center;
  align-items: center;
  .loadingBox {
    .dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin: 0 10px;
      border-radius: 12px;
      background-color: ${({ theme }) => theme.color.basic800};
      animation: ${bounce} 0.5s ease-out infinite;
      &:nth-child(2) {
        animation-delay: 0.1s;
      }
      &:nth-child(3) {
        animation-delay: 0.2s;
      }
    }
  }
`;
