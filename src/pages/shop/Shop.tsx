import React, { useEffect, useRef } from 'react';
import * as commonStyles from '../.././styles/commonStyles';
import * as styles from './Shop.styles';
import Categories from './components/Categories';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import { useMediaQueries } from '../../hooks/useMediaQueries';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../api/shop';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Shop() {
  // todo: change tag to newest?
  const { data, error, isPending } = useQuery({
    queryKey: ['products', { page: 1, pageSize: 6, tag: 'promoted' }],
    queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  });
  const { isMobile } = useMediaQueries();

  return (
    <div css={[commonStyles.container, styles.shop]}>
      {!isMobile && (
        <div css={[styles.categoriesWrapper]}>
          <Categories />
        </div>
      )}

      <div css={styles.productsWrapper}>
        {isPending && <Spinner />}

        {error && <ErrorMessage />}

        {data?.products &&
          data.products.map((product) => (
            <ProductThumbnail product={product} withDetails key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
