import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Authentication from './pages/Authentication';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" h="100vh" bgImage="/background.jpg" bgSize="cover">
        <Authentication />
      </Box>
    </ChakraProvider>
  );
}

export default App;
