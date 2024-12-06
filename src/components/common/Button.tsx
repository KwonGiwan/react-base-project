import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode | string;
  fullWidth?: boolean;
  size?: 'ssm' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'grey';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  type,
  children,
  fullWidth,
  color,
  size,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      fullWidth={fullWidth}
      color={color || 'primary'}
      size={size || 'md'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  color: #fff;
  width: 500px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  background-color: ${({ theme }) => theme.color.primary100};
  transition: 0.3s;
  margin-top: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.primaryPressed};
  }
  ${(props) =>
    props.size === 'sm' &&
    css`
      width: 120px;
      padding: 12px 0;
      border-radius: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-top: 0px;
    `}
  ${(props) =>
    props.size === 'ssm' &&
    css`
      width: 60px;
      padding: 12px 0;
      border-radius: 8px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
      margin-top: 0px;
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      width: 200px;
      padding: 16px 10px;
      border-radius: 8px;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.4px;
    `}
  ${(props) => props.size === 'lg' && css``}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${(props) =>
    props.color === 'grey' &&
    css`
      background-color: ${({ theme }) => theme.color.basic400};
      &:hover {
        background-color: ${({ theme }) => theme.color.basic450};
      }
      &:active {
        background-color: ${({ theme }) => theme.color.basic350};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: ${({ theme }) => theme.color.basic600};
      background-color: ${({ theme }) => theme.color.basic400};
      &:hover {
        color: ${({ theme }) => theme.color.basic600};
        background-color: ${({ theme }) => theme.color.basic400};
      }
      &:active {
        color: ${({ theme }) => theme.color.basic600};
        background-color: ${({ theme }) => theme.color.basic400};
      }
    `}
`;
