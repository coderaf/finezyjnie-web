import React from 'react';
import * as styles from './ProductInCart.styles';
import { Product } from '../../../types/common';

interface Props {
  product: Product;
}

function ProductInCart({ product }: Props) {
  const image = product.images.small[0];

  return (
    <div css={styles.productInCart}>
      <div css={styles.productInCartInfo}>
        <div css={styles.productInCartThumbnail(image)} />
        <div css={styles.productInCartName}>{product.name}</div>
      </div>

      <div css={styles.productInCartQuantity}>1 szt.</div>
      <div css={styles.productInCartPrice}>85 zł</div>

      <div css={styles.productInCartRemove}>X</div>
    </div>
  );
}

export default ProductInCart;
