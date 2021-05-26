import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface Props {
  variant?: 'big' | 'small';
  lenght?: 'short' | 'long';
}

const StyledInput = styled.input<Props>`
  width: ${({ lenght }) => (lenght === 'short' ? '400px' : '10px')};
  height: ${({ variant }) => (variant === 'big' ? '30px' : '50px')};
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: ${colors.pink};
`;

export const Input = React.forwardRef<HTMLInputElement, Props & JSX.IntrinsicElements['input']>(
  (
    {
      children,
      variant = 'small',
      lenght = 'short',
      className,
      defaultValue,
      disabled,
      name,
      onChange,
      placeholder,
      required = false,
      value,
      ...rest
    },
    forwardRef,
  ) => (
    <StyledInput
      aria-label={name}
      aria-required={required}
      disabled={disabled}
      placeholder={placeholder}
      ref={forwardRef}
      value={value || defaultValue}
      name={name}
      onChange={onChange}
      {...rest}
    />
  ),
);
