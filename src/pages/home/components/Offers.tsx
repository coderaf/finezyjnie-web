import React from 'react';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Offers.styles';
import Text from '../../../components/Text/Text';
import { pageContent } from '../pageContent';
import Carousel from '../../../components/Carousel/Carousel';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../api/shop';
import { products } from '../../mock';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

function Offers() {
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  // });
  const { isMobile } = useMediaQueries();

  return (
    <section css={[commonStyles.container, styles.offers]}>
      <div css={styles.offersSection}>
        <Text variant={isMobile ? 'mHeadline5' : 'dHeadline5'} uppercase color="white">
          {pageContent.offersTitle}
        </Text>
      </div>

      <Carousel products={products} />
    </section>
  );
}

export default Offers;
