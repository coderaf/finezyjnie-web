import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import * as styles from './Carousel.styles';
import ProductThumbnail from '../ProductThumbnail/ProductThumbnail';
import { Product } from '../../types/common';
import theme from '../../theme';

interface Props {
  products: Product[];
}

interface ThemeBreakpoints {
  desktop: string;
  tablet: string;
  mobile: string;
}

interface CustomBreakpoints {
  [key: string]: {
    slidesPerView: number;
    spaceBetween: number;
  };
}

const removePx = (value: string): number => parseInt(value.replace('px', ''), 10);

const generateBreakpoints = (themeBreakpoints: ThemeBreakpoints): CustomBreakpoints => {
  const customBreakpoints: CustomBreakpoints = {};

  customBreakpoints[removePx(themeBreakpoints.mobile)] = {
    slidesPerView: 2,
    spaceBetween: 0,
  };

  customBreakpoints[removePx(themeBreakpoints.tablet)] = {
    slidesPerView: 3,
    spaceBetween: 0,
  };

  customBreakpoints[removePx(themeBreakpoints.desktop)] = {
    slidesPerView: 4,
    spaceBetween: 0,
  };

  return customBreakpoints;
};

const breakpoints = generateBreakpoints(theme.breakpoints);

export function Carousel({ products }: Props) {
  return (
    <div css={styles.swiperWrapper}>
      <Swiper
        autoplay={{ delay: 2500 }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        modules={[Navigation, Autoplay]}
        navigation={true}
        breakpoints={breakpoints}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductThumbnail {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
