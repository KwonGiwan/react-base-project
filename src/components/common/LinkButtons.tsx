import React from 'react';
import styled from 'styled-components';

export default function LinkButtons() {
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };
  const userAgent = navigator.userAgent.toLowerCase();
  if (isMobile()) {
    return (
      <StyledLinks>
        {userAgent.match(/iphone|ipad|ipod/i) ? (
          <button
            onClick={() =>
              window.open(
                'https://apps.apple.com/kr/app/lab-code-scanner/id1597455005?app=itunes&ign-mpt=uo%3D4',
                '_blank',
              )
            }
            className="btn btn-appstore"
          ></button>
        ) : (
          <button
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.snaptag.labCode',
                '_blank',
              )
            }
            className="btn btn-playstore"
          ></button>
        )}
      </StyledLinks>
    );
  } else {
    return (
      <StyledLinks className="btn-wrap">
        <button
          onClick={() =>
            window.open(
              'https://apps.apple.com/kr/app/lab-code-scanner/id1597455005?app=itunes&ign-mpt=uo%3D4',
              '_blank',
            )
          }
          className="btn btn-appstore"
        ></button>
        <button
          onClick={() =>
            window.open(
              'https://play.google.com/store/apps/details?id=com.snaptag.labCode',
              '_blank',
            )
          }
          className="btn btn-playstore"
        ></button>
      </StyledLinks>
    );
  }
}

const StyledLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .btn {
    width: 143px;
    height: 44px;
    margin-right: 12px;
    border-radius: 8px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #000;
    &:last-child {
      margin-right: 0;
    }
    &.btn-appstore {
      background-image: url('/images/btn-download-appstore.svg');
      &:hover {
        background-image: url('/images/btn-download-appstore-hover.svg');
      }
    }
    &.btn-playstore {
      background-image: url('/images/btn-download-playstore.svg');
      &:hover {
        background-image: url('/images/btn-download-playstore-hover.svg');
      }
    }
  }
`;
