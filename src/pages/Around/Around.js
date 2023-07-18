import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Center, Flex, Image, StatLabel } from '@chakra-ui/react';
import './Around.scss';
import CreateNewObject from '../../components/CreateNewObject';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constant';
import { getCookie } from '../../utils/cookie';
import ShowSatellites from '../../components/ShowSatellites';
import { SatelliteContext } from '../../contexts/satellite';
import Header from '../../components/Header';

const Around = () => {
  // 마우스가 움직이면 버튼을 보이게 하기
  const [isHovered, setIsHovered] = useState(false);
  // 확대 transition
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  const { satellites, updateSatellite } = useContext(SatelliteContext);

  const handleZoomIn = () => {
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    setIsZoomedIn(false);
  };

  useEffect(() => {
    let timer;
    const handleMouseMove = () => {
      clearTimeout(timer);
      setIsHovered(true);

      timer = setTimeout(() => {
        setIsHovered(false);
      }, 3000); // 3000ms 이후 안 보임
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background_orbits.jpg"
      bgSize="cover"
    >
      <Box
        w="100%"
        h="100vh"
        bgPosition="center bottom"
        bgImage="/planets/planet_1.png"
        bgSize="cover"
        className={`main-container ${isZoomedIn ? 'zoomed-in' : ''}`}
        position="relative"
      >
        <Flex direction="column" gap="8px">
          <Header selectedMenu={0} />
          <ShowSatellites isZoomedIn={isZoomedIn} />
          {/*orbit 위 위성들 render & display*/}
          <Flex
            position="absolute"
            bottom={0}
            align="center"
            justify="center"
            w="100%"
            h="30%"
          >
            <Button
              w="300px"
              h="90px"
              color="white"
              bgColor="transparent"
              border="2px"
              borderColor="white"
              _hover={{
                color: 'whiteAlpha.900',
                bg: 'whiteAlpha.200',
                transform: 'scale(1.05)',
              }}
              _active={{
                color: 'whiteAlpha.900',
                transform: 'scale(1.05)',
                bg: 'whiteAlpha.400',
              }}
              fontSize="1.8em"
              onClick={handleZoomIn}
              className={`add-button ${
                isHovered && !isZoomedIn ? 'visible' : ''
              }`}
            >
              우주로 보내기
            </Button>
          </Flex>
          <CreateNewObject
            isZoomedIn={isZoomedIn}
            handleZoomOut={handleZoomOut}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Around;
