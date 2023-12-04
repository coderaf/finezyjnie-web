import React from 'react';
import * as styles from './CartHeader.styles';
import Text from '../../../components/Text/Text';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

function CartHeader({ isSummary }: { isSummary?: boolean }) {
  const { isMobile } = useMediaQueries();

  return (
    <>
      <div css={styles.cartHeaderTitle}>
        <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'}>Twój koszyk</Text>
      </div>

      <div css={styles.cartHeaderRow}>
        <div css={styles.cartHeaderProductTitle}>
          <Text variant="body16">Produkt</Text>
        </div>
        <div css={styles.cartHeaderQuantityTitle}>
          <Text variant="body16">Ilość</Text>
        </div>
        <div css={styles.cartHeaderPriceTitle}>
          <Text variant="body16">Cena</Text>
        </div>
        {!isSummary && <div css={styles.cartHeaderRemoveTitle} />}
      </div>
    </>
  );
}

export default CartHeader;
