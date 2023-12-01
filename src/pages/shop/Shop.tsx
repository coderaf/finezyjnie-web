import React, { useEffect } from 'react';
import { container, section } from '../../styles/commonStyles';
import * as styles from './Shop.styles';
import Categories from './components/Categories';
import ProductThumbnail from '../../components/ProductThumbnail/ProductThumbnail';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts } from '../../api/shop';
import Spinner from '../../components/Spinner/Spinner';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { PATHS } from '../../routes/paths';
import { useNavigate, useParams } from 'react-router-dom';
import { isObjectEmpty } from '../../utils/isObjectEmpty';

const initialParams = {
  page: 1,
  pageSize: 6,
  tag: 'promoted',
};

function Shop() {
  const [productParams, setProductParams] = React.useState(initialParams);
  const { data: categories, isPending: isCategoriesPending } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
  });
  const {
    data,
    error: productsError,
    isPending: isProductsPending,
  } = useQuery({
    queryKey: ['products', productParams],
    queryFn: () => fetchProducts(productParams),
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleProductClick = (id: string) => {
    navigate(`${PATHS.SHOP_PRODUCT}/${id}`);
  };

  useEffect(() => {
    if (!isObjectEmpty(params)) {
      setProductParams((prevParams) => ({
        ...prevParams,
        ...params,
      }));
    } else {
      setProductParams(initialParams);
    }
  }, [params]);

  return (
    <div css={[container, section, styles.shop]}>
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
