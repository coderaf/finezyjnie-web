import React, { useState } from 'react';
import * as styles from './ProductInCart.styles';
import { Product } from '../../../types/common';
import { useCart } from '../../../store/cartSlice/useCart';
import Select from '../../../components/Select/Select';
import Text from '../../../components/Text/Text';

interface Props {
  product: Product;
}

function ProductInCart({ product }: Props) {
  const { removeFromCart, setProductQuantity } = useCart();
  const [selectedOption, setSelectedOption] = useState({
    value: String(product.quantity),
    label: String(product.quantity),
  });
  const options = Array.from({ length: product.stock + 1 }, (_, i) => ({
    value: String(i),
    label: String(i),
  }));

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
        <Select
          key={product.id}
          value={selectedOption}
          options={options}
          onChange={(newValue: any) => handleQuantityChange(newValue)}
          isSearchable={false}
        />
      </div>
      <div css={styles.productInCartPrice}>{product.displayPrice}</div>
      <div css={styles.productInCartRemove} onClick={handleRemoveFromCart}>
        <Text variant="body16" color="error">
          X
        </Text>
      </div>
    </div>
  );
}

export default ProductInCart;
