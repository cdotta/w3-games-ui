import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Exo',
    body: 'Nunito',
  },
  colors: {
    customBlack: {
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
