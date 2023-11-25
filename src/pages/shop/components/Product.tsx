import React from 'react';
import { useParams } from 'react-router-dom';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Product.styles';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

function Product() {
  const { productId } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
  });

  return (
    <div css={[commonStyles.container, styles.product]}>
      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      {data && (
        <div css={styles.productWrapper}>
          <ProductImage images={data.images} />
          <ProductDetails product={data} />
        </div>
      )}
    </div>
  );
}

export default Product;
