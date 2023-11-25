import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import * as styles from './ShoppingCart.styles';
import { useAppSelector } from '../../store/hooks';

function ShoppingCart() {
  const amount = useAppSelector((state) => state.cart.amount);

  return (
    <div css={styles.cartIcon}>
      <CartIcon css={styles.shoppingIcon} />
      <span css={styles.itemCount}>{amount}</span>
    </div>
  );
}

export default ShoppingCart;
