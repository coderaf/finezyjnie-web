import React from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import * as styles from './ProductImageSwiper.styles';
import { useMediaQueries } from '../../../hooks/useMediaQueries';

interface Props {
  images: string[];
  setSwiper: (swiper: SwiperClass) => void;
}

function ProductImageSwiper({ images, setSwiper }: Props) {
  const { isDesktop } = useMediaQueries();
  const modules = !isDesktop ? [Navigation, Pagination] : [Navigation];

  return (
    <div css={styles.mySwiper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        modules={modules}
        navigation={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper: SwiperClass) => setSwiper(swiper)}
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductImageSwiper;
