import React from 'react';
import { useParams } from 'react-router-dom';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Product.styles';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../api/shop';
import Spinner from '../../components/Spinner/Spinner';
import Text from '../../components/Text/Text';
import ProductDetails from './components/ProductDetails';
import ProductImage from './components/ProductImage';

function Product() {
  const { productId } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
  });

  return (
    <div css={[commonStyles.container, styles.product]}>
      {isPending && <Spinner />}

      {/*todo: add error message component*/}
      {error && (
        <Text variant="body16" color="error">
          {error.message}
        </Text>
      )}

      {data && (
        <div css={styles.productWrapper}>
          <ProductImage images={data.images} name={data.name} />
          <ProductDetails
            name={data.name}
            description={data.description}
            displayPrice={data.displayPrice}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
