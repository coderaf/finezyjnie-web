import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import * as styles from './Cart.styles';
import { useAppSelector } from '../../store/hooks';

function Cart() {
  const amount = useAppSelector((state) => state.cart.amount);

  return (
    <div css={styles.cartIcon}>
      <CartIcon css={styles.shoppingIcon} />
      <span css={styles.itemCount}>{amount}</span>
    </div>
  );
}

export default Cart;