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
  Image,
  Flex,
} from '@chakra-ui/react';
import ChatIcon from '../../components/ChatIcon';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constant';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/modal';

const SignUp = () => {
  const imageUrls = [
    'planets/planet_sphere1.png',
    'planets/planet_sphere2.png',
    'planets/planet_sphere3.png',
    'planets/planet_sphere4.png',
  ];

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    pwd: '',
  });

  const [colorCode, setColorCode] = useState(null);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPwd, setIsValidPwd] = useState(true);

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { name, email, pwd } = inputs;

  const onChangeInput = e => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
    if (name === 'name') {
      setIsValidName(true);
    } else if (name === 'email') {
      setIsValidEmail(true);
    } else if (name === 'pwd') {
      setIsValidPwd(true);
    }
  };

  const onOpenModalCheck = () => {
    // 회원 가입 정보 validation 검사
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setIsValidEmail(!(!email || !emailRegex.test(email)));
    setIsValidPwd(!!pwd); // Assuming an empty string is considered invalid
    setIsValidName(!!name); // Assuming an empty string is considered invalid

    if (!(!email || !emailRegex.test(email)) && !!pwd && !!name) {
      onOpen();
    }
  };

  const onConfirmSignUp = () => {
    if (colorCode) {
      axios({
        method: 'post',
        url: BASE_URL + '/auth/signUp',
        headers: {
          'Content-type': 'application/json',
        },
        data: {
          userEmail: email,
          userPwd: pwd,
          userName: name,
          colorCode,
        },
      }).then(res => {
        if (res.data.result === 'success') {
          navigate('/');
        }
      });
    }
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
                          name="name"
                          value={name}
                          variant="flushed"
                          placeholder="Enter Your Name"
                          size="md"
                          isInvalid={!isValidName}
                          errorBorderColor="crimson"
                          onChange={onChangeInput}
                        />
                      </Center>
                      <Center>
                        <Input
                          name="email"
                          value={email}
                          variant="flushed"
                          placeholder="Enter New Email"
                          size="md"
                          isInvalid={!isValidEmail}
                          errorBorderColor="crimson"
                          onChange={onChangeInput}
                        />
                      </Center>
                      <Center>
                        <Input
                          name="pwd"
                          value={pwd}
                          variant="flushed"
                          placeholder="Enter New Password"
                          size="md"
                          isInvalid={!isValidPwd}
                          type="password"
                          errorBorderColor="crimson"
                          onChange={onChangeInput}
                        />
                      </Center>
                      <Text fontSize="md">
                        계정이 이미 있으신가요?{' '}
                        <Link to="/">
                          <Text as="u">Login</Text>
                        </Link>
                      </Text>
                      <Center>
                        <Button
                          width="300px"
                          bgColor="gray.300"
                          onClick={onOpenModalCheck}
                        >
                          회원가입
                        </Button>
                        <Modal
                          closeOnOverlayClick={false}
                          isOpen={isOpen}
                          onClose={onClose}
                        >
                          <ModalOverlay />
                          <ModalContent
                            mt="10%"
                            className="modal-planet-selection-wrapper"
                            bgColor="gray.300"
                            p="5"
                          >
                            <ModalHeader>
                              {inputs.name}님, <br />
                              당신만의 우주에 오신 것을 환영합니다. <br />
                              당신의 행성을 선택하세요.
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody mt="10" mb="10">
                              <Center>
                                <Flex gap={4} dir="row">
                                  {imageUrls.map((url, colorIndex) => {
                                    return (
                                      <Image
                                        key={colorIndex}
                                        position="relative"
                                        src={url}
                                        w={20}
                                        h={20}
                                        border={
                                          colorIndex === colorCode
                                            ? 'solid #718fa7'
                                            : 'transparent'
                                        }
                                        borderRadius="10px"
                                        _hover={{cursor: 'pointer'}}
                                        onClick={() => {
                                          setColorCode(colorIndex);
                                        }}
                                      />
                                    );
                                  })}
                                </Flex>
                              </Center>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                mr="2"
                                bg='blue.700'
                                textColor='white'
                                _hover={{ backgroundColor: 'blue.900' }}
                                onClick={onConfirmSignUp}
                                disabled={colorCode === null}
                              >
                                선택한 행성으로 회원가입
                              </Button>
                              <Button onClick={onClose}>취소</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
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
    </Box>
  );
};

export default SignUp;
