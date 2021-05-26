import React from 'react';
import styled from 'styled-components';

interface Props {
  big: boolean;
}

const StyledInput = styled.input`
width: 200px;
height: 50px;
border-radius: 10px;

`

export const Input = React.forwardRef<HTMLInputElement, Props & JSX.IntrinsicElements['input']>(
  (
    { children, className, defaultValue, disabled, name, onChange, placeholder, required = false, value, ...rest },
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
