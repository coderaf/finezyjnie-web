import React, { useState } from 'react';
import { container, section } from '../../styles/commonStyles';
import * as styles from './Cart.styles';
import { useCart } from '../../store/cartSlice/useCart';
import Text from '../../components/Text/Text';
import CartShipmentMethod from './components/CartShipmentMethod';
import CartPaymentMethod from './components/CartPaymentMethod';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../routes/paths';
import CartContent from './components/CartContent';

function Cart() {
  const { productsInCart, totalAmount } = useCart();
  const navigate = useNavigate();
  const [shipmentPrice, setShipmentPrice] = useState<number | undefined>(undefined);

  const checkoutPrice = shipmentPrice
    ? (Number(totalAmount) + shipmentPrice / 100).toFixed(2)
    : totalAmount;

  const handleNextStep = () => {
    if (productsInCart.length === 0 || !shipmentPrice) {
      return;
    }
    navigate(PATHS.CART_USER_INFO);
  };

  const handleContinueShopping = () => {
    navigate(PATHS.SHOP);
  };

  return (
    <div css={[container, section]}>
      <CartContent
        productsInCart={productsInCart}
        totalAmount={totalAmount}
        shipmentPrice={undefined}
      />

      <div css={styles.cartPaymentsWrapper}>
        <CartShipmentMethod setShipmentPrice={setShipmentPrice} />
        <CartPaymentMethod />
        {shipmentPrice && (
          <div css={styles.cartPaymentsSummary}>
            <Text variant="body20">Do zapłaty: </Text>
            <Text variant="subtitle20" color="primary">
              {checkoutPrice} zł
            </Text>
          </div>
        )}
      </div>

      <div css={styles.cartButtons}>
        <div css={styles.buttonWrapper}>
          <Button secondary={true} title={'Kontynuuj zakupy'} onClick={handleContinueShopping} />
        </div>

        <div css={styles.buttonWrapper}>
          <Button
            title={'Zamawiam'}
            isDisabled={productsInCart.length === 0 || !shipmentPrice}
            onClick={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
