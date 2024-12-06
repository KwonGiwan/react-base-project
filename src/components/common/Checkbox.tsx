import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface CheckboxProps {
  id: string;
  name?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  triggerReset?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  id,
  name,
  defaultChecked,
  disabled,
  triggerReset,
  onChange,
  onBlur,
}: CheckboxProps) {
  const [isChecked, setChecked] = useState<boolean>(
    defaultChecked ? defaultChecked : false,
  );

  useEffect(() => {
    setChecked(false);
  }, [triggerReset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };
  return (
    <CheckboxContainer htmlFor={id} isChecked={isChecked} disabled={disabled}>
      <img className="check-icon" src="/images/icon-checkbox.svg" alt="check" />
      <input
        type="checkbox"
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        onBlur={onBlur}
      />
    </CheckboxContainer>
  );
}

type CheckboxContainerProps = {
  isChecked: boolean;
  disabled?: boolean;
};

const CheckboxContainer = styled.label<CheckboxContainerProps>`
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  .check-icon {
    vertical-align: middle;
    filter: grayscale(100%);
  }
  input {
    display: none;
  }
  ${(props) =>
    props.isChecked &&
    css`
      .check-icon {
        filter: grayscale(0);
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%) brightness(0.6);
    `}
`;
