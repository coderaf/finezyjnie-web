import React from 'react';
import * as styles from './ProductThumbnail.styles';
import { Product } from '../../types/common';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';

// todo: add fallback images to public folder
const fallbackDesktopImage = 'https://picsum.photos/200/400';
const fallbackMobileImage = 'https://picsum.photos/200/100';

interface Props {
  product: Product;
}

function ProductThumbnail({ product }: Props) {
  const navigate = useNavigate();

  console.log('PATHS.PRODUCT ', PATHS.PRODUCT);
  console.log(`${PATHS.PRODUCT}/${product.id}`);

  const handleProductClick = () => {
    console.log('Product clicked!', product);
    navigate(`${PATHS.PRODUCT}/${product.id}`);
  };

  return (
    <div
      css={styles.productThumbnail(fallbackDesktopImage, fallbackMobileImage)}
      onClick={handleProductClick}
    />
  );
}

export default ProductThumbnail;
