import React from 'react';
import * as styles from './ProductInCart.styles';
import { Product } from '../../../types/common';
import { useCart } from '../../../store/cartSlice/useCart';

interface Props {
  product: Product;
}

function ProductInCart({ product }: Props) {
  const { removeFromCart } = useCart();

  const image = product.images.small[0];

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div css={styles.productInCart}>
      <div css={styles.productInCartInfo}>
        <div css={styles.productInCartThumbnail(image)} />
        <div css={styles.productInCartName}>{product.name}</div>
      </div>

      <div css={styles.productInCartQuantity}>{product.quantity} szt.</div>
      <div css={styles.productInCartPrice}>{product.displayPrice}</div>

      <div css={styles.productInCartRemove} onClick={handleRemoveFromCart}>
        X
      </div>
    </div>
  );
}

export default ProductInCart;
