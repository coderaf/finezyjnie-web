import React from 'react';
import { useParams } from 'react-router-dom';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Product.styles';

function Product() {
  const params = useParams();
  console.log('params: ', params);

  return (
    <div css={[commonStyles.container, styles.product]}>
      <div css={styles.productImage}></div>
      <div>Product Details</div>
    </div>
  );
}

export default Product;
