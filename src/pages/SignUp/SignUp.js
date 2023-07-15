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
import { Link } from 'react-router-dom';

const SignUp = () => {
  const onChangeId = e => {
    // e.target.value
  };

  const onChangePwd = e => {};

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
                        placeholder="Enter New Email"
                        size="md"
                        onChange={onChangeId}
                      />
                    </Center>
                    <Center>
                      <Input
                        variant="flushed"
                        placeholder="Enter New Password"
                        size="md"
                        type="password"
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
                      <Button width="300px" bgColor="gray.300">
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
        <Box h="50px" />
      </Stack>
    </Center>
  );
};

export default SignUp;
