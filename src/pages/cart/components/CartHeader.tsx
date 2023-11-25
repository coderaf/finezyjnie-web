import React from 'react';
import * as styles from './CartHeader.styles';
import Text from '../../../components/Text/Text';

function CartHeader() {
  return (
    <>
      <div css={styles.cartHeaderTitle}>
        <Text variant="dHeadline3">Twój koszyk</Text>
      </div>

      <div css={styles.cartHeaderRow}>
        <div css={styles.cartHeaderProductTitle}>Produkt</div>
        <div css={styles.cartHeaderQuantityTitle}>Ilość</div>
        <div css={styles.cartHeaderPriceTitle}>Cena</div>
        <div css={styles.cartHeaderRemoveTitle} />
      </div>
    </>
  );
}

export default CartHeader;
