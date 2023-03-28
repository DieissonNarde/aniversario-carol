import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const colors = {
  primary: '#4b204b',
  hover: '#4C2C72',
  background: '#0E0E0E',
  systemColor: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

const fonts = {
  heading: `'Annie Use Your Telescope', cursive;`,
  body: `'Annie Use Your Telescope', cursive;`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
