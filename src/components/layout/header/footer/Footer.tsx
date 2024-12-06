import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <div className="inner">
        <div className="footer-wrap">
          <div className="footer-text-wrap">
            <Link to="/">
              <h5>스냅태그(주)</h5>
            </Link>
            <ul className="footer-text-list">
              <li className="footer-text-item">
                <span>
                  경기도 성남시 분당구 황새울로359번길 7, 경림빌딩 6층 (13590)
                </span>
                <span className="ceo">대표이사 : 민경웅</span>
              </li>
              <li className="footer-text-item">
                <span className="add-bar">사업자등록번호 : 765-86-01847</span>
                <span className="add-bar">대표번호 : 031-781-4350</span>
                <span>이메일 : official@snaptag.co.kr</span>
              </li>
            </ul>
            <div className="footer-text-terms">
              <a
                href="https://triangular-island-879.notion.site/DEV-Center-b2c86dfcf7b2414291afe907ceeb3b69?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                <span className="add-bar">이용약관</span>
              </a>
              <a
                href="https://triangular-island-879.notion.site/DEV-Center-599efacec9e44197b658cfa146bbc836?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                <span className="add-bar">개인정보처리방침</span>
              </a>
              <a
                href="https://triangular-island-879.notion.site/Core-7df133f26d5341058bf3c00705eb4c82?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                <span className="add-bar">OSS Notice</span>
              </a>
              <span>Ⓒ SNAPTAG. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  padding: 100px 0 100px 288px;
  border-top: 1px solid ${({ theme }) => theme.color.basic200};
  background-color: #1a1b1e;
  .footer-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .footer-text-wrap {
      h5 {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.625rem;
        letter-spacing: -0.5px;
        color: ${({ theme }) => theme.color.basic800};
      }
      .footer-text-list {
        margin: 20px 0;
        .footer-text-item {
          margin: 10px 0;
          span {
            font-weight: 400;
            font-size: 0.8125rem;
            line-height: 1rem;
            letter-spacing: -0.325px;
            color: ${({ theme }) => theme.color.basic500};
            &.ceo {
              margin-left: 20px;
              letter-spacing: 0px;
            }
            &.add-bar {
              &::after {
                content: '';
                vertical-align: middle;
                display: inline-block;
                width: 1px;
                height: 12px;
                margin: 0px 8px;
                background-color: rgba(196, 196, 196, 0.3);
              }
            }
          }
        }
      }
      .footer-text-terms {
        span {
          font-weight: 400;
          font-size: 0.8125rem;
          line-height: 1rem;
          letter-spacing: -0.325px;
          color: ${({ theme }) => theme.color.basic700};
          &.add-bar {
            &::after {
              content: '';
              vertical-align: middle;
              display: inline-block;
              width: 1px;
              height: 12px;
              margin: 0px 8px;
              background-color: rgba(196, 196, 196, 0.3);
            }
          }
        }
      }
      .footer-company-download {
        margin-top: 40px;
        display: flex;
        gap: 25px;
        .download-btn {
          width: 232px;
          padding: 16px;
          border-radius: 8px;
          background-color: ${({ theme }) => theme.color.basic300};
          border: 1px solid #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .btn-text {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: -0.325px;
            color: #fff;
          }
          &:hover {
            background-color: #262a2c;
          }
        }
        .site-container {
          margin-bottom: 0;
          width: 50%;
          .site-button {
            color: white;
            border: 1px solid;
            padding: 10px;
          }
        }
      }
    }
    .footer-link-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: column;
      .footer-link-social-list {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 50px;
        .footer-link-social-item {
          margin: 0 12px;
          cursor: pointer;
          .social-icon {
            width: 40px;
            height: 40px;
            background-color: ${({ theme }) => theme.color.basic500};
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.4s;
            &:hover {
              background-color: #000;
            }
            .blog-icon {
              transform: translateY(1px);
            }
          }
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .footer-app-download {
        .btn-wrap {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        }
      }
      .footer-company-download {
        margin-top: 40px;
        display: flex;
        gap: 25px;
        .download-btn {
          width: 232px;
          padding: 16px;
          border-radius: 8px;
          background-color: ${({ theme }) => theme.color.basic300};
          border: 1px solid #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .btn-text {
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: -0.325px;
            color: #fff;
          }
          &:hover {
            background-color: #262a2c;
          }
        }
      }
    }
  }
  @media all and (min-width: 481px) and (max-width: 820px) {
    padding: 40px 0;
    .footer-wrap {
      align-items: flex-start;
      flex-direction: column;
      .footer-text-wrap {
        .footer-text-terms {
          margin-bottom: 52px;
        }
        .footer-company-download {
          margin-bottom: 52px;
        }
      }
      .footer-link-wrap {
        width: 234px;
        align-items: flex-start;
        .footer-link-social-list {
          justify-content: flex-start;
          margin-bottom: 44px;
        }
        .footer-link-admin {
          width: 100%;
          a {
            .footer-link-admin-btn {
              width: 100%;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding: 56px 0;
    .footer-wrap {
      align-items: flex-start;
      flex-direction: column;
      .footer-text-wrap {
        .footer-text-list {
          margin: 24px 0;
          .footer-text-item {
            span {
              &.ceo {
                margin-top: 8px;
                margin-left: 0;
              }
            }
          }
        }
        .footer-text-terms {
          margin-bottom: 40px;
          span {
            display: block;
            margin-bottom: 8px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .footer-company-download {
          margin-bottom: 40px;
        }
      }
      .footer-link-wrap {
        width: 100%;
        align-items: flex-start;
        .footer-link-social-list {
          justify-content: flex-start;
          margin-bottom: 44px;
        }
        .footer-link-admin {
          width: 100%;
          a {
            .footer-link-admin-btn {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
