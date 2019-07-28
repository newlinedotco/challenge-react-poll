import { createGlobalStyle } from 'styled-components';

/**
 * This file contains some starter global styles to make it easier for you to
 * complete the challenge.
 *
 * I recommend that you do not add styles here and, instead, add styles via
 * their respective styled-components.
 */
export default createGlobalStyle`

  /* The Inter UI font face via: https://rsms.me/inter/ */
  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

  body {
    max-width: 720px;
    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    color: #030C30;
  }
`;
