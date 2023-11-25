import React from 'react';
import * as styles from './ProductThumbnail.styles';
import { Product } from '../../types/common';
import Text from '../Text/Text';

interface Props {
  product: Product;
  withDetails?: boolean;
  onClick?: () => void;
}

function ProductThumbnail({ product, withDetails, onClick }: Props) {
  const mobileImage = product.images.small[0];
  const desktopImage = product.images.large[0];

  return (
    <div css={styles.productThumbnail}>
      <div css={styles.productThumbnailImage(desktopImage, mobileImage)} onClick={onClick} />

      {withDetails && (
        <div css={styles.productThumbnailDetails}>
          <Text variant="body16">{product.name}</Text>
          <Text variant="body16">{product.displayPrice}</Text>
        </div>
      )}
    </div>
  );
}

export default ProductThumbnail;
