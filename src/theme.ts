import { createTheme } from '@mui/material/styles'
import { createGlobalStyle } from 'styled-components';

//Colores globales
export const GlobalStyles = createGlobalStyle`

:root {
    --font-open-sans:'Open Sans', sans-serif ;
    --background-grey: #f3f3f3;
    --white: #ffffff;
    --black: #222222;
    --light-orange: #fffce0;
    --base-organge: #fab400;
    --light-green: #cee6c6;
    --base-green: #0b7329;
    --claro-red: #ef3829;
    --light-red: #ffd4d4;
    --institutional-red: #da291c;
    --base-red: #b50000;
    --dark-red: #8b0000;
    --error-red: #b7202E;
    --lighter-grey: #f0f0f0;
    --grey: #6a6a6a;
    --light-dark-grey: #5a5a5a;
    --dark-grey: #222222;
    --line-grey: #D0D0D0;
    --color-input: #EBEBEB;
    --color-select-opt: #c7e5eb;
    --light-blue: #d4f7ff;
    --institutional-blue: #1f97ae;
    --blue: #0097a9;
    --dark-blue: #006274;
}
`;

//Theme MUI
export const ClaroTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#0097A9'
    },
    error: {
      main: '#B50000'
    },
    grey: {
      100: '#6A6A6A'
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: '0px 2px 8px 0px #00000033', // Sombra personalizada para todos los Accordion
        },
      },
    },
  },
})