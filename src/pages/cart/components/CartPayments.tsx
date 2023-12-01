import React, { useEffect } from 'react';
import { container, section } from '../../../styles/commonStyles';
import { ShopConfig } from '../../../api/shop/types';
import { useLocation } from 'react-router-dom';
import * as styles from './CartPayments.styles';
import Text from '../../../components/Text/Text';
import { useCart } from '../../../store/cartSlice/useCart';

function CartPayments() {
  const { state }: { state: { config: ShopConfig } } = useLocation();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div css={[container, section]}>
      <div css={styles.cartPayments}>
        <Text variant="dHeadline3" align="center" marginBottom={32}>
          Dane do przelewu:
        </Text>

        <Text variant="body16">
          Nazwa odbiorcy: <span>{state?.config.bank_transfer_account_name}</span>
        </Text>
        <Text variant="body16">
          Adres: <span>{state?.config.bank_transfer_address}</span>
        </Text>
        <Text variant="body16">
          Numer konta: <span>{state?.config.bank_transfer_account_number}</span>
        </Text>

        <Text variant="body16">
          Przewidywan termin wysyłki: <span>{state?.config.delivery_time}</span>
        </Text>
      </div>
    </div>
  );
}

export default CartPayments;
