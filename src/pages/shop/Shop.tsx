import React from 'react';
import * as commonStyles from '../.././styles/commonStyles';
import * as styles from './Shop.styles';
import Categories from './components/Categories/Categories';
import { products } from '../mock';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import { useMediaQueries } from '../../hooks/useMediaQueries';

function Shop() {
  const { isMobile } = useMediaQueries();

  return (
    <div css={[commonStyles.container, styles.shop]}>
      {!isMobile && (
        <div css={[styles.categoriesWrapper]}>
          <Categories />
        </div>
      )}

      <div css={styles.productsWrapper}>
        {products.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
