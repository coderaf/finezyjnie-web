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

  select:active {
    outline: none;
    background-color: transparent;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  label {
    display: flex;
  }

  button:focus-visible {
    outline: none;
  }

  input[type='checkbox'] {
    display: inline-block;
    height: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #e2e8f0;
    width: 1rem;
    background-color: white;
    align-self: center;
    margin-right: 0.5rem;
  }

  input[type='checkbox']:hover {
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>');
    background-size: contain;
    background-color: #498468;
    border: 2px solid #498468;
  }

  input[type='checkbox']:focus-visible,
  input[type='checkbox']:checked:focus-visible {
    border-color: #4299e1;
  }

  input[type='checkbox'] {
    display: inline-block;
    height: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 2px solid #e2e8f0;
    width: 1rem;
    background-color: white;
    align-self: center;
    margin-right: 0.5rem;
  }
`;
