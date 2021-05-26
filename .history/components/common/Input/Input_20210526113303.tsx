import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

interface Props {
  variant?: 'big' | 'small';
  lenght?: 'short' | 'long';
}

const 

const StyledInput = styled.input<Props>`
  width: ${props => props.lenght === 'short' ? '200px' : '200px'};
  height: 50px;
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