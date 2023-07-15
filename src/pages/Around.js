import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Flex,
    Image
  } from '@chakra-ui/react';
import './Around.scss';
import Satellite1 from '../components/Satellite1';

const Around = () => {

    // 마우스가 움직이면 버튼을 보이게 하기
    const [isHovered, setIsHovered] = useState(false);
    // 확대 transition
    const [isZoomedIn, setIsZoomedIn] = useState(false);

    const handleZoomIn = () => {
        setIsZoomedIn(true);
    };

    // 확대 시 component
    const CreateNewObject = () => {
        
        return (
            <Box>
                <Flex
                    position="absolute"
                    bottom={0}
                    left={0}
                    align="center"
                    justify="center"
                    w="60%"
                    h="30%"
                >
                    <Satellite1 />
                </Flex>
            </Box>
        );
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
        bgPosition="center bottom" 
        bgImage="/planet_1.png" 
        bgSize="cover"
        className={`main-container ${isZoomedIn ? 'zoomed-in' : ''}`}
        >
            <Image                              // 로고 placeholder
                position="absolute"
                top={5}
                left={5}
                boxSize='60px'
                src='/robot-run.gif'
                cursor='pointer'
            />
            <Flex
                position="absolute"
                top={0}
                right={0}
                w="30%"
                h="8%"
                align='center'
                justify='space-around'
                m={3}
                p={3}
            >
                <Button
                    color='whiteAlpha.900'      // 현재 위치하고 있는 메뉴
                    fontSize='1.2em'
                    bgColor='transparent'
                    _hover={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)'
                    }}
                    _active={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)',
                        bg: 'whiteAlpha.200'
                    }}
                >
                    가까이 보기
                </Button>
                <Button
                    color='whiteAlpha.600'
                    fontSize='1.2em'
                    bgColor='transparent'
                    _hover={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)'
                    }}
                    _active={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)',
                        bg: 'whiteAlpha.200'
                    }}
                >
                    멀리 보기
                </Button>
                <Button
                    color='whiteAlpha.600'
                    fontSize='1.2em'
                    bgColor='transparent'
                    _hover={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)'
                    }}
                    _active={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)',
                        bg: 'whiteAlpha.200'
                    }}
                >
                    마음기록
                </Button>
                <Button
                    color='whiteAlpha.600'
                    fontSize='1.2em'
                    bgColor='transparent'
                    _hover={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)'
                    }}
                    _active={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.1)',
                        bg: 'whiteAlpha.200'
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
                    color='white'
                    bgColor='transparent'
                    border='2px'
                    borderColor='white'
                    _hover={{
                        color: 'whiteAlpha.900',
                        bg: 'whiteAlpha.200',
                        transform: 'scale(1.05)'
                    }}
                    _active={{
                        color: 'whiteAlpha.900',
                        transform: 'scale(1.05)',
                        bg: 'whiteAlpha.400'
                    }}
                    fontSize="1.8em"
                    onClick={handleZoomIn}
                    className={`add-button ${isHovered && !isZoomedIn ? 'visible' : ''}`}
                >
                우주로 보내기
                </Button>
            </Flex>
        </Box>
    )

    
};

export default Around;