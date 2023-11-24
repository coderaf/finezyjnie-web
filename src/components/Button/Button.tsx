import React, { ReactNode } from 'react';
import * as styles from './Button.styles';

interface Props {
  isLoading?: boolean;
  secondary?: boolean;
  title?: string;
  onClick?: () => void;
}

function Button({ title, isLoading, secondary, onClick }: Props) {
  return (
    <button css={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
