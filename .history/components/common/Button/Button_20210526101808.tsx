import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styled from 'styled-components'

export interface BaseButtonProps {
  className?: string;
  /**
   * Button type
   *
   * @default 'button'
   */
  type?: string;
  /**
   * Button variant
   *
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'ternary';
}

type InheritedButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export type ButtonProps = BaseButtonProps & InheritedButtonProps;

const StyledButton = styled.button`

`

export const Button: FC<ButtonProps> = React.memo(
  ({ children, className, type = 'button', variant = 'primary', ...props }) => {
    return (
      <button data-testid="button" type={type} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
