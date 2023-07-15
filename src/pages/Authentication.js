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
} from '@chakra-ui/react';

const Authentication = () => {
  return (
    <Center align="center" h="100vh">
      <Stack>
        <img src="./robot-run.gif" alt="running robot" width="50px" />
        <Card w="500px" h="100%" bgColor="whiteAlpha.900">
          <Center h="100%">
            <Stack>
              <CardHeader>
                <Heading size="lg">Welcome to your space</Heading>
              </CardHeader>
              <Center>
                <Box width="480px" position="relative" padding="10">
                  <Divider borderColor="gray.300" />
                  <AbsoluteCenter bgColor="#ECEDEF" px="4">
                    Login with your account
                  </AbsoluteCenter>
                </Box>
              </Center>
              <CardBody fontSize="20px">
                <Center>
                  <Stack spacing={6}>
                    <Center>
                      <Box width="300px" bgColor="whiteAlpha.300" mx={4}>
                        <Input placeholder="Enter ID" size="md" />
                      </Box>
                    </Center>
                    <Center>
                      <Box width="300px" bgColor="whiteAlpha.300" mx={4}>
                        <Input
                          placeholder="Enter Password"
                          size="md"
                          type="password"
                        />
                      </Box>
                    </Center>
                    <Center>
                      <Stack spacing={6}>
                        <Divider width="400px" borderColor="gray.300" />
                        <Center>
                          <Button width="300px" bgColor="gray.300">
                            Login with your account
                          </Button>
                        </Center>
                      </Stack>
                    </Center>
                  </Stack>
                </Center>
              </CardBody>
            </Stack>
          </Center>
        </Card>
      </Stack>
    </Center>
  );
};

export default Authentication;
