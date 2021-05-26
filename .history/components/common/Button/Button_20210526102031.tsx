import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styled from 'styled-components'
import {} from '../../../styles/colors'

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
  width: 100px;
  height: 50px;
  background-color: #fff;
`

export const Button: FC<ButtonProps> = React.memo(
  ({ children, className, type = 'button', variant = 'primary', ...props }) => {
    return (
      <StyledButton data-testid="button" type={type} {...props}>
        {children}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
