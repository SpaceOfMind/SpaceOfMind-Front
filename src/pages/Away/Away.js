import React from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './Away.scss';
import Header from '../../components/Header';

const Away = () => {
  const navigate = useNavigate();

  const moveToArchivePage = () => {
    navigate('/archive');
  };

  const moveToAroundPage = () => {
    navigate('/');
  };

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
      </Flex>
    </Box>
  );
};

export default Away;
