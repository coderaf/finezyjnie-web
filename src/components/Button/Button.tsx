import React, { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.styles';

interface Props extends ButtonHTMLAttributes<any> {
  isLoading?: boolean;
  secondary?: boolean;
  title?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

// todo: add loading state
function Button({ title, isLoading, secondary, onClick, isDisabled, ...restProps }: Props) {
  return (
    <button css={styles.button(secondary)} onClick={onClick} disabled={isDisabled} {...restProps}>
      {title}
    </button>
  );
}

export default Button;
