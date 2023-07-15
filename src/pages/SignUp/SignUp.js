import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  AbsoluteCenter,
  Input,
  Box,
  Button,
  Divider,
  Text,
} from '@chakra-ui/react';
import ChatIcon from '../../components/ChatIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const SignUp = () => {
  const [inputName, setInputName] = useState('');
  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const [isValidName, setIsValidName] = useState(true);
  const [isValidId, setIsValidId] = useState(true);
  const [isValidPwd, setIsValidPwd] = useState(true);

  const navigate = useNavigate();

  const onChangeName = e => {
    setInputName(e.target.value);
    setIsValidName(true);
  };

  const onChangeId = e => {
    setInputId(e.target.value);
    setIsValidId(true);
  };

  const onChangePwd = e => {
    setInputPwd(e.target.value);
    setIsValidPwd(true);
  };

  const onConfirmSignUp = () => {
    console.log(`id: ${inputId}, pw: ${inputPwd}`);

    // 회원 가입 정보 validation 검사
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (inputId === '' || !emailRegex.test(inputId)) {
      setIsValidId(false);
    } else if (inputPwd === '') {
      setIsValidPwd(false);
    } else if (inputName === '') {
      setIsValidName(false);
    }

    if (isValidId && isValidPwd && isValidName) {
      console.log(`회원 가입 진행`);
      console.log(BASE_URL + '/auth/signUp');

      axios({
        method: 'post',
        url: BASE_URL + '/auth/signUp',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          userEmail: inputId,
          userPwd: inputPwd,
          userName: inputName,
          planetCode: 1,
        },
      }).then(res => {
        console.log(`sign up response: ${res}`);
        if (res.data.result === 'success') {
          navigate('/login');
        }
      });
    }
  };

  return (
    <Center align="center" h="100vh">
      <Stack>
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
                    계정을 등록하세요.
                  </AbsoluteCenter>
                </Box>
              </Center>
              <CardBody fontSize="20px">
                <Center width="100%">
                  <Stack spacing={6}>
                    <Center>
                      <Input
                        variant="flushed"
                        placeholder="Enter Your Name"
                        size="md"
                        isInvalid={!isValidName}
                        errorBorderColor="crimson"
                        onChange={onChangeName}
                      />
                    </Center>
                    <Center>
                      <Input
                        variant="flushed"
                        placeholder="Enter New Email"
                        size="md"
                        isInvalid={!isValidId}
                        errorBorderColor="crimson"
                        onChange={onChangeId}
                      />
                    </Center>
                    <Center>
                      <Input
                        variant="flushed"
                        placeholder="Enter New Password"
                        size="md"
                        isInvalid={!isValidPwd}
                        type="password"
                        errorBorderColor="crimson"
                        onChange={onChangePwd}
                      />
                    </Center>
                    <Text fontSize="md">
                      계정이 이미 있으신가요?{' '}
                      <Link to="/login">
                        <Text as="u">Login</Text>
                      </Link>
                    </Text>
                    <Center>
                      <Button
                        width="300px"
                        bgColor="gray.300"
                        onClick={onConfirmSignUp}
                      >
                        회원가입
                      </Button>
                    </Center>
                    <Center>
                      <Button
                        leftIcon={<ChatIcon />}
                        width="300px"
                        bgColor="gray.300"
                      >
                        카카오 계정으로 회원가입
                      </Button>
                    </Center>
                  </Stack>
                </Center>
              </CardBody>
            </Stack>
          </div>
        </Card>
      </Stack>
    </Center>
  );
};

export default SignUp;
