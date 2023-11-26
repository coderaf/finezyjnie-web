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
  const [outOfStock, setOutOfStock] = useState(false);
  const product = productsInCart.find((product) => String(product.id) === productId);
  let stock: number | undefined;

  const { data, isPending, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId!),
  });

  if (product) {
    stock = product.stock - product.quantity;
  } else {
    stock = data?.stock;
  }

  // todo: extract out of stock logic to a hook
  useEffect(() => {
    const product = productsInCart.find((product) => String(product.id) === productId);

    if (data && product && product.quantity === data.stock) {
      setOutOfStock(true);
    }
  }, [data, productsInCart, productId]);

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
            outOfStock={outOfStock}
          />
        </div>
      )}
    </div>
  );
}

export default Product;
