import React from 'react';
import * as styles from './CartHeader.styles';
import Text from '../../../components/Text/Text';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

function CartHeader() {
  const { isMobile } = useMediaQueries();
  return (
    <>
      <div css={styles.cartHeaderTitle}>
        <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'}>Twój koszyk</Text>
      </div>

      {/*todo: add Text component?*/}
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
