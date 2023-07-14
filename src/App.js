import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" h="100vh" bgImage="/background.jpg" bgSize="cover"></Box>
    </ChakraProvider>
  );
}

export default App;
