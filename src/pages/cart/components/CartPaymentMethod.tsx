import React, { useEffect, useState } from 'react';
import * as styles from './CartPaymentMethod.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchPaymentMethods } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { PaymentMethod } from '../../../api/shop/types';

function CartPaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | undefined>(
    sessionStorage.getItem('paymentMethod')
      ? JSON.parse(sessionStorage.getItem('paymentMethod') as string)
      : undefined
  );

  const { data, isPending, error } = useQuery({
    queryKey: ['payment-methods'],
    queryFn: () => fetchPaymentMethods(),
  });

  useEffect(() => {
    if (data && !paymentMethod) {
      setPaymentMethod(data[0]);
      sessionStorage.setItem('paymentMethod', JSON.stringify(data[0]));
    }
  }, [data, paymentMethod]);

  const handleProviderClick = (method: PaymentMethod) => {
    setPaymentMethod(method);
    sessionStorage.setItem('paymentMethod', JSON.stringify(method));
  };

  return (
    <div css={styles.cartPayments}>
      <Text variant="body20" marginBottom={8}>
        Płatność:
      </Text>

      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      {data?.map((method) => (
        <div css={styles.providerWrapper} key={method.id}>
          <div css={styles.provider} onClick={() => handleProviderClick(method)}>
            <span css={styles.dot}>
              {method.id === paymentMethod?.id && <span css={styles.selected} />}
            </span>
            <Text variant="body16">{method.name}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPaymentMethod;
