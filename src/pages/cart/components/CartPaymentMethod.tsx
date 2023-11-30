import React, { useEffect } from 'react';
import * as styles from './CartPaymentMethod.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchPaymentMethods } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

interface Props {
  paymentMethodId?: number;
  setPaymentMethodId?: (id: number | undefined) => void;
}

function CartPaymentMethod({ paymentMethodId, setPaymentMethodId }: Props) {
  const { data, isPending, error } = useQuery({
    queryKey: ['payment-methods'],
    queryFn: () => fetchPaymentMethods(),
  });

  useEffect(() => {
    const id = Number(sessionStorage.getItem('paymentMethodId'));

    if (id) {
      setPaymentMethodId?.(id);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const method = data.find((method) => method.id === paymentMethodId);

      if (method) {
        sessionStorage.setItem('paymentMethodName', method.name.toString());
      }
    }
  }, [data, paymentMethodId]);

  const handleProviderClick = (id: number) => {
    setPaymentMethodId?.(id);
    sessionStorage.setItem('paymentMethodId', id.toString());
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
          <div css={styles.provider} onClick={() => handleProviderClick(method.id)}>
            <span css={styles.dot}>
              {method.id === paymentMethodId && <span css={styles.selected} />}
            </span>
            <Text variant="body16">{method.name}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPaymentMethod;
