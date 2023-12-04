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
import { UserForm } from './CartUserAddressForm';
import { useQuery, useMutation } from '@tanstack/react-query';
import { fetchShopConfig, createTransaction } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Button from '../../../components/Button/Button';
import { showToast } from '../../../utils/showToast';

function CartSummary() {
  const { productsInCart, totalAmount } = useCart();
  const {
    data,
    isPending: isConfigPending,
    error,
  } = useQuery({
    queryKey: ['shop-config'],
    queryFn: () => fetchShopConfig(),
  });
  const mutation = useMutation({
    mutationFn: (newTransaction: TransactionData) => createTransaction(newTransaction),
    onSuccess: () => {
      showToast('success', 'Twoje zamówienie zostało żłożone!');
      navigate(PATHS.CART_PAYMENTS, { state: { config: data } });
    },
    onError: () => {
      showToast('error', 'Wystąpił błąd podczas składania zamówienia');
    },
  });
  const navigate = useNavigate();

  const transactionItems = productsInCart.map(
    (product): TransactionItem => ({
      productId: Number(product.id),
      quantity: product.quantity,
    })
  );
  const storedShipmentMethod = sessionStorage.getItem('shipmentMethod');
  const storedPaymentMethod = sessionStorage.getItem('paymentMethod');
  const storedUserForm = sessionStorage.getItem('userForm');

  const initialShipmentMethod = storedShipmentMethod && JSON.parse(storedShipmentMethod);
  const initialPaymentMethod = storedPaymentMethod && JSON.parse(storedPaymentMethod);
  const userAddressForm: UserForm | undefined = storedUserForm && JSON.parse(storedUserForm);

  useEffect(() => {
    if (productsInCart.length === 0) {
      navigate(PATHS.SHOP);
    }

    if (!userAddressForm) {
      navigate(PATHS.CART_USER_INFO);
    }

    if (!initialShipmentMethod || !initialPaymentMethod) {
      navigate(PATHS.CART);
    }
  }, [productsInCart.length, navigate]);

  const handleChangeAddress = () => {
    navigate(PATHS.CART_USER_INFO);
  };

  const handleChangeMethods = () => {
    navigate(PATHS.CART);
  };

  const handlePreviousStep = () => {
    navigate(PATHS.CART_USER_INFO);
  };

  const handleNextStep = () => {
    if (productsInCart.length === 0 || !initialShipmentMethod || !initialPaymentMethod) {
      return;
    }

    const { acceptedTerms, phoneNumber, notes, ...rest } = userAddressForm!;
    const transactionData: TransactionData = {
      transactionItems,
      paymentMethodId: Number(initialPaymentMethod.id),
      shipmentMethodId: Number(initialShipmentMethod.id),
      notes,
      addresses: [
        {
          ...rest,
          phoneNumber: String(phoneNumber),
          type: 'shipping',
        },
      ],
    };

    mutation.mutate(transactionData);
  };

  return (
    <div css={[container, section]}>
      <CartHeader isSummary />

      {productsInCart.map((product) => (
        <ProductInCart key={product.id} product={product} isEditable={false} isSummary />
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

          {isConfigPending && <Spinner />}

          {error && <ErrorMessage />}

          {data && (
            <>
              <div css={styles.addressSpacing}>
                <Text variant="body16">
                  Przewidywany termin wysyłki:{' '}
                  <span css={styles.infoValue}>{data.delivery_time}</span>
                </Text>
              </div>

              {initialShipmentMethod && (
                <div css={styles.addressSpacing}>
                  <Text variant="body16">
                    Wybrana forma dostawy:{' '}
                    <span css={styles.infoValue}>{initialShipmentMethod.name}</span>
                  </Text>
                </div>
              )}

              {initialPaymentMethod && (
                <div css={styles.addressSpacing}>
                  <Text variant="body16">
                    Wybrana forma płatności:{' '}
                    <span css={styles.infoValue}>{initialPaymentMethod.name}</span>
                  </Text>
                </div>
              )}

              <div css={styles.changeAddress} onClick={handleChangeMethods}>
                <Text variant="body16" color="primary">
                  (zmień)
                </Text>
              </div>
            </>
          )}
        </div>
      </div>

      <div css={styles.cartTotal}>
        <Text variant="body16">Koszyk: {totalAmount} zł</Text>

        {initialShipmentMethod && (
          <Text variant="body16" marginBottom={16}>
            Koszt dostawy: {Number(initialShipmentMethod.price) / 100} zł
          </Text>
        )}
      </div>

      {initialShipmentMethod && (
        <div css={styles.cartPaymentsSummary}>
          <Text variant="body20">Do zapłaty: </Text>
          <Text variant="subtitle20" color="primary">
            {initialShipmentMethod.price
              ? (Number(totalAmount) + Number(initialShipmentMethod.price) / 100).toFixed(2)
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
          <Button
            title={'Potwierdzam zakup'}
            onClick={handleNextStep}
            isLoading={mutation.isPending}
            disabled={mutation.isPending || isConfigPending}
          />
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
