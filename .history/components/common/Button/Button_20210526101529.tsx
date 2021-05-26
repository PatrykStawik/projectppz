import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type InheritedButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type ButtonProps = BaseButtonProps & InheritedButtonProps;

export const Button: FC<ButtonProps> = React.memo(
  ({ children, className, type = 'button', variant = 'primary', ...props }) => {
    const { hasDarkTheme } = useThemeContext();

    return (
      <button
        data-testid="button"
        type={type}
        {...props}
        className={clsx(styles.root, styles[variant], { [styles.dark]: hasDarkTheme }, className)}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
