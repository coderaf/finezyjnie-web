import React, { useEffect, useState } from 'react';
import * as styles from './CartShipmentMethod.styles';
import Text from '../../../components/Text/Text';
import { useQuery } from '@tanstack/react-query';
import { fetchShipmentMethods } from '../../../api/shop';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { ShipmentMethod } from '../../../api/shop/types';

interface Props {
  setShipmentPrice: (price: number) => void;
}

function CartShipmentMethod({ setShipmentPrice }: Props) {
  const [shipmentMethod, setShipmentMethod] = useState<ShipmentMethod | undefined>(
    sessionStorage.getItem('shipmentMethod')
      ? JSON.parse(sessionStorage.getItem('shipmentMethod') as string)
      : undefined
  );

  const { data, isPending, error } = useQuery({
    queryKey: ['shipment-methods'],
    queryFn: () => fetchShipmentMethods(),
  });

  useEffect(() => {
    if (data && !shipmentMethod) {
      setShipmentMethod(data[0]);
      setShipmentPrice(data[0].price);
      sessionStorage.setItem('shipmentMethod', JSON.stringify(data[0]));
    }

    if (data && shipmentMethod) {
      setShipmentPrice(shipmentMethod.price);
    }
  }, [data, shipmentMethod]);

  const handleProviderClick = (method: ShipmentMethod) => {
    setShipmentMethod(method);
    setShipmentPrice(method.price);
    sessionStorage.setItem('shipmentMethod', JSON.stringify(method));
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
          <div css={styles.provider} onClick={() => handleProviderClick(method)}>
            <span css={styles.dot}>
              {method.id === shipmentMethod?.id && <span css={styles.selected} />}
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
