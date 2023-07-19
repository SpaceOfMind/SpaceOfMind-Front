import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import './Away.scss';
import ShowProbes from '../../components/ShowObject/ShowProbes';
import Header from '../../components/Header';

const Away = () => {
  const colorCode = parseInt(sessionStorage.getItem('colorCode'));
  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background_far.jpg"
      bgSize="cover"
      position="relative"
    >
      <Flex direction="column">
        <Header selectedMenu={1} />
        <Flex // 내 행성 display
          position="absolute"
          w="120px"
          h="120px"
          top="25%"
          left="8%"
        >
            <Image 
              src={
                  '/planets/planet_sphere' +
                  (colorCode + 1) +
                  '.png'
              } />
        </Flex>
        <ShowProbes />
      </Flex>
    </Box>
  );
};

export default Away;
