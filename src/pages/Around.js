import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Flex
  } from '@chakra-ui/react';
import './Around.scss';
import { transform } from 'framer-motion';

const Around = () => {

    // 마우스가 움직이면 버튼을 보이게 하기
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let timer;
        const handleMouseMove = () => {
          clearTimeout(timer);
          setIsHovered(true);
    
          timer = setTimeout(() => {
            setIsHovered(false);
          }, 5000); // 5000ms 이후 안 보임
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
        bgImage="/planet1.png" 
        bgSize="cover"
        >
            <Flex
                position="absolute"
                top={0}
                right={0}
                w="25%"
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
                    colorScheme='whiteAlpha'
                    fontSize="1.8em"
                    onClick={() => console.log('clicked!')}
                    className={`add-button ${isHovered ? 'visible' : ''}`}
                >
                우주로 보내기
                </Button>
            </Flex>
        </Box>
    )

    
};

export default Around;