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
import Around from './pages/Around/Around';
import Away from './pages/Away/Away';
import DetailObject from './pages/DetailObject/DetailObject';
import { SatelliteProvider } from './contexts/satellite';
import { ProbeProvider } from './contexts/probe';

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

function App() {
  return (
    <AppProvider contexts={[SatelliteProvider, ProbeProvider]}>
      <CookiesProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Authentication />} />
              <Route
                path="/detail/around/:objectId"
                element={<DetailObject />}
              />
              <Route path="/archive" element={<Archive />} />
              <Route path="/away" element={<Away />} />
              <Route path="/around" element={<Around />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </CookiesProvider>
    </AppProvider>
  );
}

export default App;
