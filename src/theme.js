import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  colors: {
    transparent: 'transparent',
    space: { 100: '#3E5780', 200: '#293666', 300: '#0A2644', 400: '#0B1733' },
  },
  fonts: {
    ...chakraTheme.fonts,
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
