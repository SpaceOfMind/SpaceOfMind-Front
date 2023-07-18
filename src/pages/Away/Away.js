import React from "react";
import {
    Box,
    Button,
    Flex,
    Image
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './Away.scss';

const Away = () => {

    const navigate = useNavigate();

    const moveToArchivePage = () => {
        navigate('/archive')
    };

    const moveToAroundPage = () => {
        navigate('/')
    }

    return (
        <Box
            w="100%" 
            h="100vh" 
            bgImage="/backgrounds/background_far.jpg" 
            bgSize="cover"
            position='relative'
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
                onClick={moveToAroundPage}
            >
                가까이 보기
            </Button>
            <Button
                color="whiteAlpha.900"      // 현재 위치하고 있는 메뉴
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
        </Box>
    );
};

export default Away;
