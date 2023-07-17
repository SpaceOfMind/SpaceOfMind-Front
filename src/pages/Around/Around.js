import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Image,
  Grid,
  GridItem,
  Spacer,
  Input,
} from '@chakra-ui/react';
import './Around.scss';
import CreateNewObject from '../../components/CreateNewObject';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constant';
import { getCookie } from '../../utils/cookie';

const Around = () => {
  // 마우스가 움직이면 버튼을 보이게 하기
  const [isHovered, setIsHovered] = useState(false);
  // 확대 transition
  const [isZoomedIn, setIsZoomedIn] = useState(false);

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

  const navigate = useNavigate();

  const moveToArchivePage = async () => {
    fetchData().then(() => navigate('/archive'));
  };

  const fetchData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: BASE_URL + '/archive/getAll',
        params: { userId: 1 },
        headers: {
          'Content-type': 'application/json',
          Cookie: getCookie('connect.sid'),
        },
      });

      if (res.data.result === 'success') {
        console.log(`success to fetch data!`);
        const fetchedContents = [];
        const fetchedDateItems = [];
        res.data.archives.forEach((archive, index) => {
          fetchedDateItems.push({
            title: archive.createdAt.split('.')[0].replace('T', ' '),
          });
          fetchedContents.push({
            titleArchive: archive.title,
            contentArchive: archive.content,
          });
        });

        console.log(`length of fetchedContents: ${fetchedContents.length}`);
        console.log(`length of fetchedDateItems: ${fetchedDateItems.length}`);

        window.localStorage.setItem(
          'fetchedContents',
          JSON.stringify(fetchedContents)
        );
        window.localStorage.setItem(
          'fetchedDateItems',
          JSON.stringify(fetchedDateItems)
        );
      }
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgPosition="center bottom"
      bgImage="/planet_1.png"
      bgSize="cover"
      className={`main-container ${isZoomedIn ? 'zoomed-in' : ''}`}
    >
      <Image // 로고 placeholder
        position="absolute"
        top={5}
        left={5}
        boxSize="60px"
        src="/robot-run.gif"
        cursor="pointer"
      />
      <Flex
        position="absolute"
        top={0}
        right={0}
        w="30%"
        h="8%"
        align="center"
        justify="space-around"
        m={3}
        p={3}
      >
        <Button
          color="whiteAlpha.900" // 현재 위치하고 있는 메뉴
          fontSize="1.2em"
          bgColor="transparent"
          _hover={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
          }}
          _active={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
            bg: 'whiteAlpha.200',
          }}
        >
          가까이 보기
        </Button>
        <Button
          color="whiteAlpha.600"
          fontSize="1.2em"
          bgColor="transparent"
          _hover={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
          }}
          _active={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
            bg: 'whiteAlpha.200',
          }}
        >
          멀리 보기
        </Button>
        <Button
          color="whiteAlpha.600"
          fontSize="1.2em"
          bgColor="transparent"
          _hover={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
          }}
          _active={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
            bg: 'whiteAlpha.200',
          }}
          onClick={moveToArchivePage}
        >
          마음기록
        </Button>
        <Button
          color="whiteAlpha.600"
          fontSize="1.2em"
          bgColor="transparent"
          _hover={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
          }}
          _active={{
            color: 'whiteAlpha.900',
            transform: 'scale(1.1)',
            bg: 'whiteAlpha.200',
          }}
        >
          내 행성
        </Button>
      </Flex>
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
          className={`add-button ${isHovered && !isZoomedIn ? 'visible' : ''}`}
        >
          우주로 보내기
        </Button>
      </Flex>
      <CreateNewObject isZoomedIn={isZoomedIn} handleZoomOut={handleZoomOut} />
    </Box>
  );
};

export default Around;
