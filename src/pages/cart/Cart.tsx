import React from 'react';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Cart.styles';
import { useCart } from '../../store/cartSlice/useCart';
import ProductInCart from './components/ProductInCart';
import Text from '../../components/Text/Text';
import CartHeader from './components/CartHeader';
import CartPayments from './components/CartPayments';

function Cart() {
  const { productsInCart, totalAmount } = useCart();

  return (
    <div css={[commonStyles.container, styles.cart]}>
      <CartHeader />

      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}

      <div css={styles.cartTotal}>
        <Text variant="body20">
          Suma: <span css={styles.cartTotalAmount}>{totalAmount} zł</span>
        </Text>
      </div>

      <div css={styles.cartPaymentsWrapper}>
        <CartPayments />
      </div>
    </div>
  );
}

export default Cart;
