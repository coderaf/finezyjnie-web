import React from 'react';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import * as styles from './ShoppingCart.styles';
import { useCart } from '../../store/cartSlice/useCart';

function ShoppingCart() {
  const { totalProducts } = useCart();

  return (
    <div css={styles.cartIcon}>
      <CartIcon css={styles.shoppingIcon} />
      <span css={styles.itemCount}>{totalProducts}</span>
    </div>
  );
}

export default ShoppingCart;
