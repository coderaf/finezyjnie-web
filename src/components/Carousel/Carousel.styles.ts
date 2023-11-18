import { css, Theme } from '@emotion/react';

export const swiperWrapper = (theme: Theme) => css`
  width: 100%;
  margin: 0 auto;

  .swiper {
    width: 100%;
    height: 100%;

    @media (min-width: 1279px) {
      padding: 0 20px;
    }
  }

  .swiper-slide {
    text-align: center;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-right: 15px solid ${theme.colors.secondary};

    ::after {
      content: '';
    }
  }

  .swiper-button-next {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid ${theme.colors.secondary};

    ::after {
      content: '';
    }
  }
`;
