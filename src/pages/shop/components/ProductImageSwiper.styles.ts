import { css, Theme } from '@emotion/react';

export const mySwiper = (theme: Theme) => css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 85%;
  }

  .swiper {
    width: 100%;
    padding-bottom: 32px;

    @media (min-width: ${theme.breakpoints.tablet}) {
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

  .swiper-pagination-bullet {
    background-color: ${theme.colors.secondary} !important;
  }

  .swiper-pagination-bullet-active {
    background-color: ${theme.colors.secondary} !important;
  }
`;
