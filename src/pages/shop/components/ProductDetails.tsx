import React from 'react';
import Text from '../../../components/Text/Text';
import * as styles from './ProductDetails.styles';
import { useCart } from '../../../store/cartSlice/useCart';
import { Product } from '../../../types/common';
import Button from '../../../components/Button/Button';

interface Props {
  product: Product;
}

function ProductDetails({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div css={styles.productDetails}>
      <Text variant="dHeadline1" marginBottom={8}>
        {product.name}
      </Text>
      <Text variant="body20" marginBottom={32}>
        {product.displayPrice}
      </Text>

      <Text variant="body16">{product.description}</Text>

      <div css={styles.buttonWrapper}>
        <Button title="DO KOSZYKA" onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default ProductDetails;
