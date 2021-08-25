import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Exo',
    body: 'Nunito',
  },
  colors: {
    warmBlack: '#141312',
    customGreen: '#53AA61',
    warmBlackButton: {
      500: '#141312',
      600: '#333333',
    },
    grayButton: {
      500: '#726A67',
      600: '#141312',
    },
    greenButton: {
      500: '#53AA61',
      600: '#3A9148',
    },
    customBlack: {
      100: '#726A67',
      200: '#6E6E6E',
      300: '#5B5350',
      500: '#1A1A1A',
      600: '#333333',
    },
    customOrange: {
      500: '#FF4500',
      600: '#CC3700',
    },
  },
});
export default theme;
