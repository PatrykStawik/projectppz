import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface Props {
  variant?: 'big' | 'small';
  lenght?: 'short' | 'long';
}


const StyledInput = styled.input<Props>`
  width: ${({lenght}) => lenght === 'short' ? '400px' : '200px'};
  height: ${({variant})=>variant === 'big' };
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: ${colors.pink};
`;

export const Input = React.forwardRef<HTMLInputElement, Props & JSX.IntrinsicElements['input']>(
  (
    { children, variant="big", lenght="short", className, defaultValue, disabled, name, onChange, placeholder, required = false, value, ...rest },
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
