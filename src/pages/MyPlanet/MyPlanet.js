import React from 'react';
import {
  Flex,
  Box,
  Center,
  Stack,
  Card,
  CardHeader,
  Heading,
  Divider,
  CardBody,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import './MyPlanet.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import axios from 'axios';
import { getCookie } from '../../../src/utils/cookie';
import { useCookies } from 'react-cookie';

const MyPlanet = () => {
  const userName = sessionStorage.getItem('userName');
  const userEmail = sessionStorage.getItem('userEmail');
  const colorCode = parseInt(sessionStorage.getItem('colorCode'));
  const planetCode = sessionStorage.getItem('planetCode');

  const navigate = useNavigate();

  // const COOKIE_KEY = 'connect.sid'; // 상수화시킨 쿠키 값을 넣어줬다.
  // const [, , removeCookie] = useCookies([COOKIE_KEY]); // 쓰지 않는 변수는 (공백),처리해주고 removeCookie 옵션만 사용한다

  const onConfirmLogout = async () => {
    await axios
      .get('auth/logout', {
        params: {
          userId: sessionStorage.getItem('userId'),
        },
        headers: {
          'Content-type': 'application/json',
          // Cookie: getCookie('connect.sid'),
        },
      })
      .then(res => {
        if (res.data.result === 'success') {
          console.log('로그아웃 성공');

          sessionStorage.removeItem('userId', res.data.userId);
          sessionStorage.removeItem('userName', res.data.userName);
          sessionStorage.removeItem('userEmail', res.data.userEmail);
          sessionStorage.removeItem('colorCode', res.data.colorCode);
          sessionStorage.removeItem('planetCode', res.data.planetCode);

          // removeCookie(COOKIE_KEY, { path: '/' });

          console.log('세션 스토리지 삭제 완료');
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background.jpg"
      bgSize="cover"
      position="relative"
    >
      <Flex w="100%" h="100vh" direction="column" gap="8px">
        <Header selectedMenu={3} />
        <Center align="center" h="100vh" position="relative">
          <Image
            src={'/planets/planet_sphere' + (colorCode + 1) + '.png'}
            w="26%"
            position="absolute"
            left="16%"
            bottom="14%"
            opacity="0.5"
            className="my-planet-image"
            zIndex="0"
          />
          <Stack>
            <Image src="robot-run.gif" h="50px" w="50px" />
            <Card w="500px" bgColor="whiteAlpha.400" zIndex="99">
              <div className="card-wrapper">
                <Stack>
                  <CardHeader>
                    <Heading size="lg">{userName}님의 행성 정보</Heading>
                    <Box width="100%" position="relative" padding="5">
                      <Divider borderColor="gray.300" />
                    </Box>
                  </CardHeader>
                  <CardBody fontSize="20px">
                    <Center width="100%">
                      <Stack spacing={6}>
                        <Center>
                          <Text>Email: {userEmail}</Text>
                        </Center>
                        <Center>
                          <Text>행성 코드: {planetCode}</Text>
                        </Center>
                        <Center paddingTop={10}>
                          <Button
                            width="300px"
                            bgColor="gray.300"
                            onClick={onConfirmLogout}
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
            <Box h="50px" />
          </Stack>
        </Center>
        <Box h="12" />
      </Flex>
    </Box>
  );
};

export default MyPlanet;
