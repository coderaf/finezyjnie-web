import 'normalize.css';
import { css } from '@emotion/react';

export const globalCss = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Open Sans', sans-serif;
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
