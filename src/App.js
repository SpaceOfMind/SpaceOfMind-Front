import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Authentication from './pages/Authentication';
import Fonts from './Fonts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box w="100%" h="100vh" bgImage="/background.jpg" bgSize="cover">
        <Authentication />
      </Box>
    </ChakraProvider>
  );
}

export default App;
