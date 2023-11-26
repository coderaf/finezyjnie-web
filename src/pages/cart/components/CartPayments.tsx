import React from 'react';
import * as styles from './CartPayments.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchShipmentMethods } from '../../../api/shop';

function CartPayments() {
  const { isPending, error, data } = useQuery({
    queryKey: ['shipment-methods'],
    queryFn: () => fetchShipmentMethods(),
  });

  return (
    <div css={styles.cartPayments}>
      <Text variant="body20" marginBottom={8}>
        Dostawa:
      </Text>

      <div css={styles.providerWrapper}>
        <div css={styles.provider}>
          <span css={styles.dot}>
            <span css={styles.selected} />
          </span>
          <Text variant="body16">ORLEN</Text>
        </div>

        <Text variant="body16">100 zł</Text>
      </div>

      <div css={styles.providerWrapper}>
        <div css={styles.provider}>
          <span css={styles.dot}>
            <span css={styles.selected} />
          </span>
          <Text variant="body16">ORLEN</Text>
        </div>

        <Text variant="body16">100 zł</Text>
      </div>

      <div css={styles.providerWrapper}>
        <div css={styles.provider}>
          <span css={styles.dot}>
            <span css={styles.selected} />
          </span>
          <Text variant="body16">ORLEN</Text>
        </div>

        <Text variant="body16">100 zł</Text>
      </div>
    </div>
  );
}

export default CartPayments;
