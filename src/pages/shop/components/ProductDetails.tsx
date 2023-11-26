import React from 'react';
import Text from '../../../components/Text/Text';
import * as styles from './ProductDetails.styles';
import Button from '../../../components/Button/Button';

interface Props {
  name: string;
  displayPrice: string;
  description: string;
  onCLick: () => void;
  outOfStock: boolean;
}

function ProductDetails({ name, description, displayPrice, onCLick, outOfStock }: Props) {
  return (
    <div css={styles.productDetails}>
      <Text variant="dHeadline1" marginBottom={8}>
        {name}
      </Text>
      <Text variant="body20" marginBottom={32}>
        {displayPrice}
      </Text>
      <Text variant="body16">{description}</Text>

      <div css={styles.buttonWrapper}>
        <Button title="DO KOSZYKA" onClick={onCLick} isDisabled={outOfStock} />
      </div>

      {outOfStock && (
        <Text variant="body14" color="error">
          Brak produktu na magazynie
        </Text>
      )}
    </div>
  );
}

export default ProductDetails;
