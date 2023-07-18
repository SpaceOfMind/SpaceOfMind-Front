import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.scss';
import ArchiveContent from '../../components/ArchiveContent';
import { Button } from '@chakra-ui/button';
import { ProbeContext } from '../../contexts/probe';

const DetailAway = () => {
  // TODO: detail away가 처음 마운트 될 때 서버로부터 objectId를 기반으로?? 앵????????
  // 처음 away view 혹은 away view로 들어갈 때 미리 데이터를 fetch 해와서 클릭하면 바로 props로 데이터를 넘겨주도록 함
  // session storage에 어떻게 저장하는지 살펴보고 session storage에서 들고올 수 있는 key를 알아야할 것 같은뎅

  const { objectId } = useParams();
  const { probes } = useContext(ProbeContext);
  const currentProbe = probes[objectId];

  const [showEmpty, setShowEmpty] = useState(true);
  const [showEmptyMore, setShowEmptyMore] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmpty(false);
    }, 600);

    const timerMore = setTimeout(() => {
      setShowEmptyMore(false);
    }, 1200);
    return () => {
      clearTimeout(timer);
      clearTimeout(timerMore);
    };
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background.jpg"
      bgSize="cover"
    >
      {' '}
      {!showEmpty && (
        <div
          className="mount-animation"
          style={{ position: 'absolute', bottom: 0, left: 6 }}
        >
          <Image
            p="20"
            src={'/probes/probe_' + (currentProbe.colorCode + 1) + '.png'}
          />
        </div>
      )}
      {!showEmptyMore && (
        <div
          className="mount-animation"
          style={{ position: 'absolute', right: 90, top: 90 }}
        >
          <Flex direction="column" gap="16px">
            <ArchiveContent
              title={currentProbe.title}
              content={currentProbe.content}
              dateTime={currentProbe.createdAt.split('.')[0].replace('T', ' ')}
            />
            <Flex justify="flex-end" gap="16px">
              <Button bgColor="whiteAlpha.800" width="100px">
                삭제하기
              </Button>
            </Flex>
          </Flex>
        </div>
      )}
    </Box>
  );
};

export default DetailAway;
