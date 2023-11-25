import React from 'react';
import * as commonStyles from '../../../styles/commonStyles';
import * as styles from './Offers.styles';
import Text from '../../../components/Text/Text';
import { pageContent } from '../pageContent';
import OffersSwiper from './OffersSwiper';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../../api/shop';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import Spinner from '../../../components/Spinner/Spinner';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';

function Offers() {
  const { isPending, error, data } = useQuery({
    queryKey: ['products', { page: 1, pageSize: 6, tag: 'promoted' }],
    queryFn: () => fetchProducts({ page: 1, pageSize: 6, tag: 'promoted' }),
  });
  const { isMobile } = useMediaQueries();

  return (
    <section css={[commonStyles.container, styles.offers]}>
      <div css={styles.offersSection}>
        <Text variant={isMobile ? 'mHeadline2' : 'dHeadline2'} uppercase color="white">
          {pageContent.offersTitle}
        </Text>
      </div>

      {isPending && <Spinner />}

      {error && <ErrorMessage />}

      <div css={styles.carouselWrapper}>
        {data?.products && <OffersSwiper products={data.products} />}
      </div>
    </section>
  );
}

export default Offers;
