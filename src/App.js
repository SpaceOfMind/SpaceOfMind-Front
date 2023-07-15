import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Authentication from './pages/Authentication/Authentication';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CookiesProvider>
        <Box w="100%" h="100vh" bgImage="/background.jpg" bgSize="cover">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Authentication />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </CookiesProvider>
    </ChakraProvider>
  );
}

export default App;
