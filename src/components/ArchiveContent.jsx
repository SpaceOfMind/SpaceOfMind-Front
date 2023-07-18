import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Divider, Flex, Heading, Stack } from '@chakra-ui/layout';

const ArchiveContent = ({ title, content, dateTime }) => {
  return (
    <Card p="16px" w="850px" bgColor="whiteAlpha.300" color="white">
      <CardHeader>
        <Heading size="lg">{title}</Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing="2">
          <Divider />
          <Flex flexWrap="wrap">{content}</Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        <Flex width="100%" justify="flex-end">
          {dateTime}
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default ArchiveContent;
