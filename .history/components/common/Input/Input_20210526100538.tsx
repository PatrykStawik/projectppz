import React from 'react'


export const Input = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  (
    {
      children,
      className,
      defaultValue,
      disabled,
      icon,
      iconClassName,
      inputClassName,
      name,
      onChange,
      placeholder,
      required = false,
      value,
      ...rest
    },
    forwardRef,
  ) => (
    <div className={clsx(styles.root, className)}>
      <input
        aria-label={name}
        aria-required={required}
        className={clsx(styles.input, inputClassName)}
        disabled={disabled}
        placeholder={placeholder}
        ref={forwardRef}
        value={value || defaultValue}
        name={name}
        onChange={onChange}
        {...rest}
      />
      <div className={clsx(styles.icon, iconClassName)}>{icon}</div>
    </div>
  ),
);
