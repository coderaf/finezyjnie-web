import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Product.styles';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { useCart } from '../../../store/cartSlice/useCart';

function Product() {
  const { productId } = useParams();
  const { addToCart, productsInCart } = useCart();
  const [stock, setStock] = useState<number | undefined>();
  const product = productsInCart.find((product) => String(product.id) === productId);

  const { data, isPending, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
  });

  useEffect(() => {
    if (data) {
      setStock(data.stock - data.reserved);
    }

    if (data && product) {
      if (data.stock - data.reserved - product.quantity <= 0) {
        setStock(0);
      } else {
        setStock(data.stock - data.reserved - product.quantity);
      }
    }
  }, [data, product]);

  const handleAddToCart = () => {
    data && addToCart(data);
  };

  return (
    <div css={[commonStyles.container, styles.product]}>
      {isPending && (
        <div css={styles.spinnerWrapper}>
          <Spinner />
        </div>
      )}

      {error && <ErrorMessage />}

      {data && (
        <div css={styles.productWrapper}>
          <ProductImage images={data.images} />
          <ProductDetails
            name={data.name}
            displayPrice={data.displayPrice}
            description={data.description}
            onCLick={handleAddToCart}
            stock={stock}
            outOfStock={stock === 0}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
