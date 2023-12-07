import React, { useEffect, useState } from 'react';
import * as styles from './ProductInCart.styles';
import { Product } from '../../../types/common';
import { useCart } from '../../../store/cartSlice/useCart';
import Select from '../../../components/Select/Select';
import Text from '../../../components/Text/Text';
import { BsTrash } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { fetchProductById } from '../../../api/shop';
import { showToast } from '../../../utils/showToast';
import Spinner from '../../../components/Spinner/Spinner';

interface Props {
  product: Product;
  isEditable?: boolean;
  isSummary?: boolean;
  shouldFetch?: boolean;
}

function ProductInCart({ product, isEditable = true, shouldFetch }: Props) {
  const { removeFromCart, setProductQuantity } = useCart();
  const [stock, setStock] = useState(product.stock - product.reserved);

  const [selectedOption, setSelectedOption] = useState({
    value: String(product.quantity),
    label: String(product.quantity),
  });

  const options = Array.from({ length: stock + 1 }, (_, i) => ({
    value: String(i),
    label: String(i),
  }));

  const { data, isPending } = useQuery({
    queryKey: ['product', product.id],
    queryFn: () => fetchProductById(product.id),
    enabled: !!shouldFetch,
    structuralSharing: false,
  });

  useEffect(() => {
    console.log('data: ', data);
    if (data && product.quantity) {
      const availableQuantity = data.stock - data.reserved;

      if (availableQuantity === 0) {
        handleRemoveFromCart();
        showToast('error', `Produkt: "${product.name}" jest niedostępny`);
      } else if (availableQuantity < product.quantity) {
        setProductQuantity({ id: product.id, quantity: availableQuantity });
        setSelectedOption({ value: String(availableQuantity), label: String(availableQuantity) });
        setStock(availableQuantity);
        showToast(
          'error',
          `Produkt: "${product.name}" jest dostępny w ilości: ${availableQuantity}`
        );
      } else if (availableQuantity >= product.quantity) {
        setStock(availableQuantity);
      }
    }
  }, [data, product]);

  const image = product.images.small[0];

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  const handleQuantityChange = (newValue: any) => {
    if (newValue.value === '0') {
      return removeFromCart(product.id);
    }

    setProductQuantity({ id: product.id, quantity: Number(newValue.value) });
    setSelectedOption(newValue);
  };

  return (
    <div css={styles.productInCart}>
      <div css={styles.productInCartInfo}>
        <div css={styles.productInCartThumbnail(image)} />
        <div css={styles.productInCartName}>{product.name}</div>
      </div>

      <div css={styles.productInCartQuantity}>
        {isPending ? (
          <Spinner />
        ) : (
          <Select
            key={product.id}
            value={selectedOption}
            options={options}
            onChange={(newValue: any) => handleQuantityChange(newValue)}
            isSearchable={false}
            isDisabled={!isEditable}
          />
        )}
      </div>
      <div css={styles.productInCartPrice}>{product.displayPrice}</div>

      {isEditable && (
        <div css={styles.productInCartRemove} onClick={handleRemoveFromCart}>
          <Text variant="body16" color="error">
            <BsTrash />
          </Text>
        </div>
      )}
    </div>
  );
}

export default ProductInCart;
