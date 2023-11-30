import React from 'react';
import CartHeader from './CartHeader';
import ProductInCart from './ProductInCart';
import { Product } from '../../../types/common';
import * as styles from './CartContent.styles';
import Text from '../../../components/Text/Text';

interface Props {
  productsInCart: Product[];
  totalAmount: number;
  shipmentPrice: number | undefined;
}

const CartContent = ({ productsInCart, totalAmount, shipmentPrice }: Props) => (
  <>
    <CartHeader />

    {productsInCart.map((product) => (
      <ProductInCart key={product.id} product={product} />
    ))}

    {productsInCart.length === 0 && (
      <div css={styles.cartEmpty}>
        <Text variant="body20">Twój koszyk jest pusty</Text>
      </div>
    )}

    <div css={styles.cartCheckout}>
      <Text variant="body16" marginBottom={8}>
        Koszyk: {totalAmount} zł
      </Text>
      {shipmentPrice && <Text variant="body16">Koszt dostawy: {shipmentPrice / 100} zł</Text>}
    </div>
  </>
);

export default CartContent;
