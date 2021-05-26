import React from 'react'

interface Props {
  /** Adds className for select element wrapper */
  className?: React.CSSProperties;
  /** Sets default value for placeholder */
  defaultValue?: string;
  /** Adds icon to the right side of input */
  icon?: React.ReactNode;
  /** Adds className to icon element */
  iconClassName?: React.CSSProperties | string;
  /** Adds className to input element */
  inputClassName?: React.CSSProperties | string;
  /**
   * Sets aria-required true on input element
   *
   * @default false
   */
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, Props & JSX.IntrinsicElements['input']>(
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
