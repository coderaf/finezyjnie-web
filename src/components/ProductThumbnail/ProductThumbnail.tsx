import React from 'react';
import * as styles from './ProductThumbnail.styles';
import { Product } from '../../types/common';

// todo: remove it later
const fallbackDesktopImage = 'https://picsum.photos/200/400';
const fallbackMobileImage = 'https://picsum.photos/200/100';

function ProductThumbnail({
  description,
  images,
  category,
  name,
  price_display,
  tags,
  stock,
}: Product) {
  return <div css={styles.productThumbnail(fallbackDesktopImage, fallbackMobileImage)} />;
}

export default ProductThumbnail;
