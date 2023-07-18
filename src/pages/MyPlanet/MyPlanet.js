import React from "react";
import {
    Flex,
    Box,
    Center,
    Stack,
    Card,
    CardHeader,
    Heading,
    Divider,
    AbsoluteCenter,
    CardBody,
    Input,
    Text,
    Link,
    Button,
    Image
} from '@chakra-ui/react';
import './MyPlanet.scss';
import Header from "../../components/Header";

const MyPlanet = () => {

    const userName = sessionStorage.getItem('userName');
    const userEmail = sessionStorage.getItem('userEmail');
    const colorCode = parseInt(sessionStorage.getItem('colorCode'));
    const planetCode = sessionStorage.getItem('planetCode');

    return (
        <Box
          w="100%"
          h="100vh"
          bgImage="/backgrounds/background.jpg"
          bgSize="cover"
          position='relative'
        >
          <Flex 
            w='100%' 
            h='100vh' 
            direction="column" 
            gap="8px"
            >
            <Header selectedMenu={3} />
            <Center align="center" h="100vh" position='relative'>
                <Image 
                    src={
                        '/planets/planet_sphere' +
                        (colorCode + 1) +
                        '.png'
                    }
                    w='500px' 
                    h='500px' 
                    position='absolute' 
                    left='20%' 
                    bottom='10%'
                    opacity='0.5'
                    className="my-planet-image"
                    zIndex='0' />
                    <Card w="500px" bgColor="whiteAlpha.400" zIndex='99'>
                        <div className="card-wrapper">
                        <Stack>
                            <CardHeader>
                                <Heading size="lg">
                                    {userName} 님의 행성 정보입니다
                                </Heading>
                                <Box width="100%" position="relative" padding="5">
                                    <Divider borderColor="gray.300" />
                                </Box>
                            </CardHeader>
                            <CardBody fontSize="20px">
                            <Center width="100%">
                                <Stack spacing={6}>
                                <Center>
                                    <Text>
                                        Email: {userEmail}
                                    </Text>
                                </Center>
                                <Center>
                                    <Text>
                                        행성 코드: {planetCode}
                                    </Text>
                                </Center>
                                <Center paddingTop={10} >
                                    <Button
                                    width="300px"
                                    bgColor="gray.300"
                                    // onClick={onConfirmLogin}
                                    >
                                    로그아웃
                                    </Button>
                                </Center>
                                </Stack>
                            </Center>
                            </CardBody>
                        </Stack>
                        </div>
                    </Card>
            </Center>
          </Flex>
        </Box>
      );
};

export default MyPlanet;