import React from 'react';
import * as commonStyles from '../.././styles/commonStyles';
import * as styles from './Shop.styles';
import Categories from './components/Categories';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from '../../api/shop';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { PATHS } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`${PATHS.SHOP_PRODUCT}/${id}`);
  };

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
            <ProductThumbnail
              name={product.name}
              displayPrice={product.displayPrice}
              images={product.images}
              stock={product.stock}
              withDetails
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
