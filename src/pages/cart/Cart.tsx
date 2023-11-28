import React, { useState } from 'react';
import * as commonStyles from '../../styles/commonStyles';
import * as styles from './Cart.styles';
import { useCart } from '../../store/cartSlice/useCart';
import ProductInCart from './components/ProductInCart';
import Text from '../../components/Text/Text';
import CartHeader from './components/CartHeader';
import CartShipmentMethod from './components/CartShipmentMethod';
import CartPayments from './components/CartPaymentMethod';
import Button from '../../components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';

function Cart() {
  const { productsInCart, totalAmount } = useCart();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [shipmentPrice, setShipmentPrice] = useState<number | undefined>(undefined);
  const [shipmentMethodId, setShipmentMethodId] = useState<number | undefined>(undefined);
  const [paymentMethodId, setPaymentMethodId] = useState<number | undefined>(undefined);

  const handleContinueShopping = () => {
    if (state) {
      navigate(state.context);
    } else {
      navigate('/sklep');
    }
  };

  const handleNextStep = () => {
    if (productsInCart.length === 0 || !shipmentMethodId || !paymentMethodId) {
      return;
    }

    navigate('/koszyk/twoje-dane', {
      state: {
        paymentMethods: {
          paymentMethodId,
          shipmentMethodId,
          shipmentPrice,
        },
      },
    });
  };

  return (
    <div css={[commonStyles.container, styles.cart]}>
      <CartHeader />

      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}

      <div css={styles.cartTotal}>
        <Text variant="body16" marginBottom={8}>
          Koszyk: {totalAmount} zł
        </Text>

        {shipmentPrice && <Text variant="body16">Dostawa: {shipmentPrice / 100} zł</Text>}
      </div>

      <div css={styles.cartPaymentsWrapper}>
        <CartShipmentMethod
          setShipmentPrice={setShipmentPrice}
          shipmentMethodId={shipmentMethodId}
          setShipmentMethodId={setShipmentMethodId}
        />

        <CartPayments paymentMethodId={paymentMethodId} setPaymentMethodId={setPaymentMethodId} />

        {shipmentPrice && (
          <div css={styles.cartPaymentsSummary}>
            <Text variant="body20">Do zapłaty: </Text>
            <Text variant="subtitle20" color="primary">
              {shipmentPrice ? (Number(totalAmount) + shipmentPrice / 100).toFixed(2) : totalAmount}{' '}
              zł
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
            isDisabled={productsInCart.length === 0 || !shipmentMethodId || !paymentMethodId}
            onClick={handleNextStep}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
