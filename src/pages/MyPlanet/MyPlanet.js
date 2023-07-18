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
                    src='planets/planet_sphere1.png' 
                    w='500px' 
                    h='500px' 
                    position='absolute' 
                    transform='rotate(30deg)'
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
                                당신을 위한 우주에 <br /> 오신 것을 환영합니다.
                            </Heading>
                            </CardHeader>
                            <Center>
                            <Box width="100%" position="relative" padding="10">
                                <Divider borderColor="gray.300" />
                                <AbsoluteCenter bgColor="#3b3c57" px="4">
                                계정에 로그인하세요.
                                </AbsoluteCenter>
                            </Box>
                            </Center>
                            <CardBody fontSize="20px">
                            <Center width="100%">
                                <Stack spacing={6}>
                                <Center>
                                    <Input
                                    variant="flushed"
                                    placeholder="Enter Email"
                                    size="md"
                                    // onChange={onChangeId}
                                    />
                                </Center>
                                <Center>
                                    <Input
                                    variant="flushed"
                                    placeholder="Enter Password"
                                    size="md"
                                    type="password"
                                    // onChange={onChangePwd}
                                    />
                                </Center>
                                <Text fontSize="md">
                                    계정이 없으신가요?{' '}
                                    <Link to="/signUp">
                                    <Text as="u">Sign Up</Text>
                                    </Link>
                                </Text>
                                <Center>
                                    <Button
                                    width="300px"
                                    bgColor="gray.300"
                                    // onClick={onConfirmLogin}
                                    >
                                    로그인
                                    </Button>
                                </Center>
                                <Center>
                                    <Button
                                    // leftIcon={<ChatIcon />}
                                    width="300px"
                                    bgColor="gray.300"
                                    >
                                    카카오 계정으로 로그인
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