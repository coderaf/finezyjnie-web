import React, { useEffect, useState } from 'react';
import * as styles from './CartPayments.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchPaymentMethods } from '../../../api/shop';

function CartPayments() {
  const { data, isPending, error } = useQuery({
    queryKey: ['payment-methods'],
    queryFn: () => fetchPaymentMethods(),
  });
  const [selectedMethodId, setSelectedMethodId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const id = Number(sessionStorage.getItem('shipment-method-id'));

    if (id) {
      setSelectedMethodId(id);
    }
  }, []);

  const handleProviderClick = (id: number) => {
    setSelectedMethodId(id);
    sessionStorage.setItem('shipment-method-id', id.toString());
  };

  return (
    <div css={styles.cartPayments}>
      <Text variant="body20" marginBottom={8}>
        Płatność:
      </Text>

      {data?.map((method) => (
        <div css={styles.providerWrapper} key={method.id}>
          <div css={styles.provider} onClick={() => handleProviderClick(method.id)}>
            <span css={styles.dot}>
              {method.id === selectedMethodId && <span css={styles.selected} />}
            </span>
            <Text variant="body16">{method.name}</Text>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartPayments;
