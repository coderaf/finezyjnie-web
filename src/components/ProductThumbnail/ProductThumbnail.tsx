import React from 'react';
import * as styles from './ProductThumbnail.styles';
import { Product } from '../../types/common';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import Text from '../Text/Text';

interface Props {
  product: Product;
  withDetails?: boolean;
}

function ProductThumbnail({ product, withDetails }: Props) {
  const navigate = useNavigate();

  const desktopImage = product.images.large[0];
  const mobileImage = product.images.small[0];

  const handleProductClick = () => {
    navigate(`${PATHS.SHOP_PRODUCT}/${product.id}`);
  };

  return (
    <div css={styles.productThumbnail}>
      <div
        css={styles.productThumbnailImage(desktopImage, mobileImage)}
        onClick={handleProductClick}
      />

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
