import { createGlobalStyle } from 'styled-components';
import {
  default as NetflixSansBold,
  default as NetflixSansLight,
  default as NetflixSansMedium,
  default as NetflixSansRegular,
} from '../assets/netflix-sans-font/NetflixSans-Regular.woff2';
import { Black } from './_colors';

const GlobalStyles = createGlobalStyle`

    body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: ${Black};
        box-sizing: border-box;
        font-family: 'Netflix Sans', sans-serif;
    }

    @font-face {
    font-family: 'Netflix Sans';
    src: url(${NetflixSansRegular}) format('woff2')
}

@font-face {
    font-family: 'Netflix Sans';
    src: url(${NetflixSansLight}) format('woff2')
}

@font-face {
    font-family: 'Netflix Sans';
    src: url(${NetflixSansMedium}) format('woff2')
}

@font-face {
    font-family: 'Netflix Sans';
    src: url(${NetflixSansBold}) format('woff2')
}

    *::-webkit-scrollbar {display: none;}
`;

export default GlobalStyles;
