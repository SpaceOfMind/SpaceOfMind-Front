import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Stack,
  Text,
  Input,
  Box,
  Button,
  Divider,
} from '@chakra-ui/react';

const Authentication = () => {
  return (
    <Center align="center" h="100vh">
      <Card w="550px" h="64%" bgColor="whiteAlpha.900">
        <Center h="100%">
          <Stack>
            <CardHeader>
              <Heading size="lg">Welcome to your space</Heading>
            </CardHeader>
            <CardBody fontSize="20px">
              <Center>
                <Stack spacing={6}>
                  <Center>
                    <Divider width="400px" borderColor="gray.300" />
                  </Center>
                  <Text pt="3" fontSize="sm">
                    당신의 계정으로 로그인하세요.
                  </Text>
                  <Box width="400px" bgColor="whiteAlpha.300" mx={4}>
                    <Input placeholder="Enter ID" size="md" />
                  </Box>
                  <Box width="400px" bgColor="whiteAlpha.300" mx={4}>
                    <Input placeholder="Enter Password" size="md" />
                  </Box>
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
    </Center>
  );
};

export default Authentication;
