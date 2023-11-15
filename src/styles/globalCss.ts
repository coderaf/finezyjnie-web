import 'normalize.css';
import { css } from '@emotion/react';

export const globalCss = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  input,
  input:focus,
  textarea,
  textarea:focus,
  textarea:focus-visible {
    outline: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
