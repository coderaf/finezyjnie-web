import React, { useEffect, useState } from 'react';
import * as styles from './CartShipmentMethod.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchShipmentMethods } from '../../../api/shop';

interface Props {
  setShipmentPrice?: (price: number | undefined) => void;
}

function CartShipmentMethod({ setShipmentPrice }: Props) {
  // todo: extract to custom hook or use react-query?
  const { data, isPending, error } = useQuery({
    queryKey: ['shipment-methods'],
    queryFn: () => fetchShipmentMethods(),
  });
  const [selectedMethodId, setSelectedMethodId] = useState<number | undefined>(undefined);

  useEffect(() => {
    const id = Number(sessionStorage.getItem('shipment-method-id'));

    if (id) {
      setSelectedMethodId(id);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const method = data.find((method) => method.id === selectedMethodId);

      if (method) {
        setShipmentPrice?.(method.price);
      }
    }
  }, [data, selectedMethodId]);

  const handleProviderClick = (id: number) => {
    setSelectedMethodId(id);
    sessionStorage.setItem('shipment-method-id', id.toString());
  };

  return (
    <div css={styles.cartMethods}>
      <Text variant="body20" marginBottom={8}>
        Dostawa:
      </Text>

      {data?.map((method) => (
        <div css={styles.providerWrapper} key={method.id}>
          <div css={styles.provider} onClick={() => handleProviderClick(method.id)}>
            <span css={styles.dot}>
              {method.id === selectedMethodId && <span css={styles.selected} />}
            </span>
            <Text variant="body16">{method.name}</Text>
          </div>

          <Text variant="subtitle16">{method.displayPrice}</Text>
        </div>
      ))}
    </div>
  );
}

export default CartShipmentMethod;
