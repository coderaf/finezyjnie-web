import React from 'react';
import Text from '../../../components/Text/Text';
import * as styles from './ProductDetails.styles';

interface Props {
  name: string;
  description: string;
  displayPrice: string;
}

function ProductDetails({ name, displayPrice, description }: Props) {
  return (
    <div css={styles.productDetails}>
      <Text variant="dHeadline1" marginBottom={8}>
        {name}
      </Text>
      <Text variant="body20" marginBottom={32}>
        {displayPrice}
      </Text>

      <Text variant="body16">{description}</Text>
    </div>
  );
}

export default ProductDetails;
