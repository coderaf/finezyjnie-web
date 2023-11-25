import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import * as styles from './OffersSwiper.styles';
import ProductThumbnail from '../../../components/ProductThumbnail/ProductThumbnail';
import { Product } from '../../../types/common';

const swiperBreakpoints = {
  600: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
};

interface Props {
  products: Product[];
}

function OffersSwiper({ products }: Props) {
  return (
    <div css={styles.mySwiper}>
      <Swiper
        autoplay={{ delay: 2500 }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={true}
        breakpoints={swiperBreakpoints}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductThumbnail product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OffersSwiper;