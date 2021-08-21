import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Exo',
    body: 'Nunito',
  },
  colors: {
    warmBlack: '#141312',
    customBlack: {
      100: '#726A67',
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
