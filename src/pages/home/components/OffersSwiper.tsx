import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import * as styles from './OffersSwiper.styles';
import ProductThumbnail from '../../../components/ProductThumbnail/ProductThumbnail';
import { Product } from '../../../types/common';
import { PATHS } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleProductClick = (id: string) => {
    navigate(`${PATHS.SHOP_PRODUCT}/${id}`);
  };

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
            <ProductThumbnail product={product} onClick={() => handleProductClick(product.id)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default OffersSwiper;
