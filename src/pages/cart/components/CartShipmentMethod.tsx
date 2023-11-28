import React, { useEffect } from 'react';
import * as styles from './CartShipmentMethod.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchShipmentMethods } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

interface Props {
  setShipmentPrice?: (price: number | undefined) => void;
  shipmentMethodId?: number;
  setShipmentMethodId?: (id: number | undefined) => void;
}

function CartShipmentMethod({ setShipmentPrice, shipmentMethodId, setShipmentMethodId }: Props) {
  const { data, isPending, error } = useQuery({
    queryKey: ['shipment-methods'],
    queryFn: () => fetchShipmentMethods(),
  });

  useEffect(() => {
    const id = Number(sessionStorage.getItem('shipment-method-id'));

    if (id) {
      setShipmentMethodId?.(id);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const method = data.find((method) => method.id === shipmentMethodId);

      if (method) {
        setShipmentPrice?.(method.price);
      }
    }
  }, [data, shipmentMethodId]);

  const handleProviderClick = (id: number) => {
    setShipmentMethodId?.(id);
    sessionStorage.setItem('shipment-method-id', id.toString());
  };

  return (
    <div css={styles.cartMethods}>
      <Text variant="body20" marginBottom={8}>
        Dostawa:
      </Text>

      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      {data?.map((method) => (
        <div css={styles.providerWrapper} key={method.id}>
          <div css={styles.provider} onClick={() => handleProviderClick(method.id)}>
            <span css={styles.dot}>
              {method.id === shipmentMethodId && <span css={styles.selected} />}
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
