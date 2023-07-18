import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.scss';
import ArchiveContent from '../../components/ArchiveContent';
import { Button } from '@chakra-ui/button';
import { SatelliteContext } from '../../contexts/satellite';

const DetailObject = () => {
  // TODO: detail around가 처음 마운트 될 때 서버로부터 objectId를 기반으로?? 앵????????
  // 처음 around view 혹은 away view로 들어갈 때 미리 데이터를 fetch 해와서 클릭하면 바로 props로 데이터를 넘겨주도록 함
  // session storage에 어떻게 저장하는지 살펴보고 session storage에서 들고올 수 있는 key를 알아야할 것 같은뎅

  const { objectId } = useParams();
  const { satellites } = useContext(SatelliteContext);
  const currentSatellite = satellites[objectId];

  const [showEmpty, setShowEmpty] = useState(true);
  const [showEmptyMore, setShowEmptyMore] = useState(true);

  console.log(`파싱된 objectId: ${objectId}`);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmpty(false);
    }, 1500);

    const timerMore = setTimeout(() => {
      setShowEmptyMore(false);
    }, 2500);
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
            src={
              '/satellites/satellite_' +
              (currentSatellite.colorCode + 1) +
              '.png'
            }
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
              title={currentSatellite.title}
              content={currentSatellite.content}
              dateTime={currentSatellite.createdAt
                .split('.')[0]
                .replace('T', ' ')}
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

export default DetailObject;
