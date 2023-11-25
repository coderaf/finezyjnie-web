import React from 'react';
import * as commonStyles from '../.././styles/commonStyles';
import * as styles from './Shop.styles';
import Categories from './components/Categories';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from '../../api/shop';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Shop() {
  const { data: categories, isPending: isCategoriesPending } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
  const {
    data,
    error: productsError,
    isPending: isProductsPending,
  } = useQuery({
    queryKey: ['products', { page: 1, pageSize: 6, tag: 'promoted' }],
    queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  });

  return (
    <div css={[commonStyles.container, styles.shop]}>
      {categories && data && (
        <div css={[styles.categoriesWrapper]}>
          <Categories categories={categories} />
        </div>
      )}

      <div css={styles.productsWrapper}>
        {(isCategoriesPending || isProductsPending) && <Spinner />}

        {productsError && <ErrorMessage />}

        {data &&
          categories &&
          data.products.map((product) => (
            <ProductThumbnail product={product} withDetails key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
