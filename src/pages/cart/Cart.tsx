import React from 'react';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Cart.styles';
import { useCart } from '../../store/cartSlice/useCart';
import ProductInCart from './components/ProductInCart';
import Text from '../../components/Text/Text';
import CartHeader from './components/CartHeader';

function Cart() {
  const { productsInCart, totalProducts, addToCart, removeFromCart, totalAmount } = useCart();

  return (
    <div css={[commonStyles.container, styles.cart]}>
      <CartHeader />
      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}

      <div css={styles.cartTotal}>
        <Text variant="body20">
          Do zapłaty: <span css={styles.cartTotalAmount}>{totalAmount} zł</span>
        </Text>
      </div>
    </div>
  );
}

export default Cart;
