import React from 'react';
import * as styles from './ProductThumbnail.styles';
import Text from '../Text/Text';
import { Images } from '../../types/common';

interface Props {
  name: string;
  displayPrice: string;
  images: Images;
  stock: number;
  onClick: () => void;
  withDetails?: boolean;
}

function ProductThumbnail({ name, displayPrice, images, withDetails, stock, onClick }: Props) {
  const mobileImage = images.small[0];
  const desktopImage = images.large[0];

  return (
    <div css={styles.productThumbnail}>
      <div css={[styles.productThumbnailImage(desktopImage, mobileImage)]} onClick={onClick} />

      {withDetails && (
        <div css={styles.productThumbnailDetails}>
          <Text variant="body16">{name}</Text>
          <Text variant="body16">{displayPrice}</Text>
        </div>
      )}
    </div>
  );
}

export default ProductThumbnail;
