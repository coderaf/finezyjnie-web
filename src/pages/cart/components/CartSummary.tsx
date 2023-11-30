import React, { useEffect } from 'react';
import { container, section } from '../../../styles/commonStyles';
import CartHeader from './CartHeader';
import ProductInCart from './ProductInCart';
import { useCart } from '../../../store/cartSlice/useCart';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../../routes/paths';
import * as styles from './CartSummary.styles';
import { TransactionData, TransactionItem } from '../../../api/shop/types';
import Text from '../../../components/Text/Text';
import { UserForm } from './CartUserInfo';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchShopConfig, createTransaction } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Button from '../../../components/Button/Button';

function CartSummary() {
  const { productsInCart, totalAmount } = useCart();
  const { data, isPending, error } = useQuery({
    queryKey: ['shop-config'],
    queryFn: () => fetchShopConfig(),
  });
  const mutation = useMutation({
    mutationFn: (newTransaction: TransactionData) => createTransaction(newTransaction),
  });

  const navigate = useNavigate();

  const transactionItems = productsInCart.map(
    (product): TransactionItem => ({
      productId: Number(product.id),
      quantity: product.quantity,
    })
  );
  const initialShipmentMethodId = sessionStorage.getItem('shipmentMethodId');
  const initialPaymentMethodId = sessionStorage.getItem('paymentMethodId');

  const initialShipmentMethodPrice = sessionStorage.getItem('shipmentMethodPrice');
  const initialShipmentMethodName = sessionStorage.getItem('shipmentMethodName');
  const initialPaymentMethodName = sessionStorage.getItem('paymentMethodName');

  const userAddressJSON = sessionStorage.getItem('userForm');
  const userAddressForm: UserForm | undefined = userAddressJSON && JSON.parse(userAddressJSON);

  useEffect(() => {
    if (productsInCart.length === 0) {
      navigate(PATHS.SHOP);
    }

    if (!userAddressForm) {
      navigate(PATHS.CART_USER_INFO);
    }

    if (!initialShipmentMethodPrice || !initialShipmentMethodName) {
      navigate(PATHS.CART);
    }
  }, [productsInCart.length, navigate]);

  const handleChangeAddress = () => {
    navigate(PATHS.CART_USER_INFO);
  };

  const handlePreviousStep = () => {
    navigate(PATHS.CART_USER_INFO);
  };

  const handleNextStep = () => {
    if (productsInCart.length === 0 || !initialShipmentMethodId || !initialPaymentMethodId) {
      return;
    }
    const { acceptedTerms, ...rest } = userAddressForm!;
    console.log(rest);
    const transactionData: TransactionData = {
      transactionItems,
      shipmentMethodId: Number(initialShipmentMethodId),
      paymentMethodId: Number(initialPaymentMethodId),
      addresses: [
        {
          ...rest,
          // todo: change hardcoded value
          type: 'shipping',
        },
      ],
    };
    mutation.mutate(transactionData);
    // const transactionData: TransactionData = {
    //   transactionItems,
    //   shipmentMethodId: Number(initialShipmentMethodId),
    //   paymentMethodId: Number(initialPaymentMethodId),
    //   addresses: [
    //     {
    //       ...userAddressForm,
    //     },
    //   ],
    // };
    //
    // mutation.mutate();

    // const transactionData: TransactionData = {
    //   transactionItems,
    //   shipmentMethodId: Number(initialShipmentMethodId),
    //   paymentMethodId: Number(initialPaymentMethodId),
    //   addresses: [
    //     {...userAddressForm}
    //   ],
    // };
  };

  return (
    <div css={[container, section]}>
      <CartHeader />

      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} isEditable={false} />
      ))}

      <div css={styles.userFormsSummary}>
        <div css={styles.userAddress}>
          <Text variant="dHeadline3" marginBottom={16}>
            Adres wysyłki
          </Text>

          <div css={styles.addressSpacing}>
            <Text variant="body16">
              {userAddressForm?.firstName} {userAddressForm?.lastName}
            </Text>
          </div>

          <div css={styles.addressSpacing}>
            <Text variant="body16">{userAddressForm?.street}</Text>
          </div>

          <div css={styles.addressSpacing}>
            <Text variant="body16">
              {userAddressForm?.postalCode}, {userAddressForm?.city}
            </Text>
          </div>

          <div css={styles.addressSpacing}>
            <Text variant="body16">Polska</Text>
          </div>

          <div css={styles.addressSpacing}>
            <Text variant="body16">{userAddressForm?.phoneNumber}</Text>
          </div>

          <div css={styles.changeAddress} onClick={handleChangeAddress}>
            <Text variant="body16" color="primary">
              (zmień)
            </Text>
          </div>
        </div>

        <div css={styles.shipmentMethods}>
          <Text variant="dHeadline3" marginBottom={16}>
            Informacje
          </Text>

          {isPending && <Spinner />}

          {error && <ErrorMessage />}

          {data && (
            <>
              <div css={styles.addressSpacing}>
                <Text variant="body16">
                  Przewidywany termin wysyłki:{' '}
                  <span css={styles.infoValue}>{data.delivery_time}</span>
                </Text>
              </div>

              <div css={styles.addressSpacing}>
                <Text variant="body16">
                  Wybrana forma dostawy:{' '}
                  <span css={styles.infoValue}>{initialShipmentMethodName}</span>
                </Text>
              </div>

              <div css={styles.addressSpacing}>
                <Text variant="body16">
                  Wybrana forma płatności:{' '}
                  <span css={styles.infoValue}>{initialPaymentMethodName}</span>
                </Text>
              </div>
            </>
          )}
        </div>
      </div>

      <div css={styles.cartTotal}>
        <Text variant="body16">Koszyk: {totalAmount} zł</Text>

        {initialShipmentMethodPrice && (
          <Text variant="body16" marginBottom={16}>
            Koszt dostawy: {Number(initialShipmentMethodPrice) / 100} zł
          </Text>
        )}
      </div>

      {initialShipmentMethodPrice && (
        <div css={styles.cartPaymentsSummary}>
          <Text variant="body20">Do zapłaty: </Text>
          <Text variant="subtitle20" color="primary">
            {initialShipmentMethodPrice
              ? (Number(totalAmount) + Number(initialShipmentMethodPrice) / 100).toFixed(2)
              : totalAmount}{' '}
            zł
          </Text>
        </div>
      )}

      <div css={styles.cartButtons}>
        <div css={styles.buttonWrapper}>
          <Button secondary={true} title={'Wstecz'} onClick={handlePreviousStep} />
        </div>

        <div css={styles.buttonWrapper}>
          <Button title={'Potwierdzam zakup'} onClick={handleNextStep} />
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
