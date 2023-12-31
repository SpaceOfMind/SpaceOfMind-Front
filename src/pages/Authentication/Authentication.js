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
import { useState } from 'react';
import axios from 'axios';
import useFetchArchiveData from '../../utils/useFetchArchiveData';
import { BASE_URL } from '../../constant';

const Authentication = () => {
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const navigate = useNavigate();

  const [fetchArchives, fetchSatellites, fetchProbes] = useFetchArchiveData();

  const onChangeId = e => {
    setInputId(e.target.value);
  };

  const onChangePwd = e => {
    setInputPwd(e.target.value);
  };

  const onConfirmLogin = () => {

    axios({
      method: 'post', 
      url: BASE_URL + '/auth/login', 
      headers: {'Content-type': 'application/json'},
        withCredentials: true,
      data: { userEmail: inputId, userPwd: inputPwd }
    }).then(res => {
        if (res.data.result === 'success') {
          sessionStorage.setItem('userId', res.data.userId);
          sessionStorage.setItem('userName', res.data.userName);
          sessionStorage.setItem('userEmail', res.data.userEmail);
          sessionStorage.setItem('colorCode', res.data.colorCode);
          sessionStorage.setItem('planetCode', res.data.planetCode);

          fetchAllData().then(() => {
            navigate('/around');
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchAllData = async () => {
    await fetchArchives();
    await fetchSatellites();
    await fetchProbes();
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background.jpg"
      bgSize="cover"
    >
      <Center align="center" h="100vh">
        <Stack>
          {/* <img src="./robot-run.gif" alt="running robot" width="50px" /> */}
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
          {/* <Box h="50px" /> */}
        </Stack>
      </Center>
    </Box>
  );
};

export default Authentication;
