import React, { ButtonHTMLAttributes } from 'react';
import * as styles from './Button.styles';
import Spinner from '../Spinner/Spinner';
import { colors } from '../../theme/colors';

interface Props extends ButtonHTMLAttributes<any> {
  isLoading?: boolean;
  secondary?: boolean;
  title?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

function Button({ title, isLoading = false, secondary, onClick, isDisabled, ...restProps }: Props) {
  return (
    <button css={styles.button(secondary)} onClick={onClick} disabled={isDisabled} {...restProps}>
      {isLoading ? <Spinner isLoading={true} size={20} color={colors.black} /> : title}
    </button>
  );
}

export default Button;
