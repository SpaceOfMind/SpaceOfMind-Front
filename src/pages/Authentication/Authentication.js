import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
  AbsoluteCenter,
  Input,
  Box,
  Button,
  Divider,
} from '@chakra-ui/react';
import './Authentication.scss';
import ChatIcon from '../../components/ChatIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import { SatelliteContext } from '../../contexts/satellite';

const Authentication = () => {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const navigate = useNavigate();
  const { updateSatellite } = useContext(SatelliteContext);

  const onChangeId = e => {
    setInputId(e.target.value);
  };

  const onChangePwd = e => {
    setInputPwd(e.target.value);
  };

  const onConfirmLogin = () => {
    axios
      .post(
        '/auth/login',
        { userEmail: inputId, userPwd: inputPwd },
        {
          headers: { 'Content-type': 'application/json' },
          withCredentials: true,
        }
      )
      .then(res => {
        if (res.data.result === 'success') {
          fetchArchives().then(() => {
            console.log(`데이터 가져오기 끝`);
            navigate('/');
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchArchives = async () => {
    console.log('initialize archive data for arounds and aways');

    await axios
      .get('archive/getAround', {
        params: {
          userId: 1, // TODO: dummy
        },
        headers: { 'Content-type': 'application/json' },
      })
      .then(res => {
        if (res.data.result === 'success') {
          console.log('인공위성 정보 가져오기 성공');
          updateSatellite(res.data.arounds);
        }
      })
      .catch(err => {
        console.log('인공위성 정보 가져오기 에러');
        console.log(err);
      });

    await axios
      .get('archive/getAway', {
        params: {
          userId: 1, // TODO: dummy
        },
        headers: { 'Content-type': 'application/json' },
      })
      .then(res => {
        if (res.data.result === 'success') {
          console.log('탐사선 정보 가져오기 성공');
          // TODO: hook & context API 쓰도록 변경
          window.sessionStorage.setItem(
            'aways',
            JSON.stringify(res.data.aways)
          );
        }
      })
      .catch(err => {
        console.log('탐사선 정보 가져오기 에러');
        console.log(err);
      });
  };

  return (
    <Center align="center" h="100vh">
      <Stack>
        <img src="./robot-run.gif" alt="running robot" width="50px" />
        <Card w="500px" h="100%" bgColor="whiteAlpha.300">
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
                        onChange={onChangeId}
                      />
                    </Center>
                    <Center>
                      <Input
                        variant="flushed"
                        placeholder="Enter Password"
                        size="md"
                        type="password"
                        onChange={onChangePwd}
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
                        onClick={onConfirmLogin}
                      >
                        로그인
                      </Button>
                    </Center>
                    <Center>
                      <Button
                        leftIcon={<ChatIcon />}
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
        <Box h="50px" />
      </Stack>
    </Center>
  );
};

export default Authentication;
