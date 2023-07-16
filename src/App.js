import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Authentication from './pages/Authentication/Authentication';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SignUp';
import { CookiesProvider } from 'react-cookie';
import Archive from './pages/Archive/Archive';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <Box w="100%" h="100vh" bgImage="/background.jpg" bgSize="cover">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CustomButton />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/login" element={<Authentication />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </ChakraProvider>
    </CookiesProvider>
  );
}

export default App;
