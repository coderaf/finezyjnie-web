import React, { useState } from 'react';
import * as styles from './ProductImage.styles';
import { Images } from '../../../types/common';
import { useMediaQueries } from '../../../hooks/useMediaQueries';
import ProductImageSwiper from './ProductImageSwiper';
import { SwiperClass } from 'swiper/swiper-react';

interface Props {
  images: Images;
}

function ProductImage({ images }: Props) {
  const [swiper, setSwiper] = useState<SwiperClass>();
  const { isMobile, isDesktop } = useMediaQueries();
  const productImages = isMobile ? images.small : images.large;

  const handleThumbnailClick = (index: number) => {
    swiper?.slideTo(index);
  };

  return (
    <div css={styles.productImageWrapper}>
      {isDesktop && (
        <div css={styles.productImageThumbnails}>
          {images.large.map((image, i) => (
            <img src={image} alt="" key={image} onClick={() => handleThumbnailClick(i)} />
          ))}
        </div>
      )}

      <ProductImageSwiper images={productImages} setSwiper={setSwiper} />
    </div>
  );
}

export default ProductImage;
