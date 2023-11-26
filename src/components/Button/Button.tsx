import React from 'react';
import * as styles from './Button.styles';

interface Props {
  isLoading?: boolean;
  secondary?: boolean;
  title?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

// todo: add loading state
function Button({ title, isLoading, secondary, onClick, isDisabled }: Props) {
  return (
    <button css={styles.button(secondary)} onClick={onClick} disabled={isDisabled}>
      {title}
    </button>
  );
}

export default Button;
