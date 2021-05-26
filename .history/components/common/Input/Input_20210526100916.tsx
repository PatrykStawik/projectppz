import React from 'react';

interface Props{
  
}

export const Input = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  (
    { children, className, defaultValue, disabled, name, onChange, placeholder, required = false, value, ...rest },
    forwardRef,
  ) => (
    <input
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
