import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import './Detail.scss';
import ArchiveContent from '../../components/ArchiveContent';
import { Button } from '@chakra-ui/button';
import { ProbeContext } from '../../contexts/probe';
import useFetchArchiveData from '../../utils/useFetchArchiveData';
import Header from '../../components/Header';

const DetailAway = () => {
  // TODO: detail away가 처음 마운트 될 때 서버로부터 objectId를 기반으로?? 앵????????
  // 처음 away view 혹은 away view로 들어갈 때 미리 데이터를 fetch 해와서 클릭하면 바로 props로 데이터를 넘겨주도록 함
  // session storage에 어떻게 저장하는지 살펴보고 session storage에서 들고올 수 있는 key를 알아야할 것 같은뎅

  const { objectId } = useParams();
  const { probes } = useContext(ProbeContext);
  const currentProbe = probes[objectId];

  const [showEmpty, setShowEmpty] = useState(true);
  const [showEmptyMore, setShowEmptyMore] = useState(true);
  const navigate = useNavigate();

  const [, , fetchProbes, patchArchives] = useFetchArchiveData();

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

  const onClickDelete = async () => {
    patchArchives(currentProbe.archiveId).then(() => {
      fetchProbes().then(() => {
        navigate('/away');
      });
    });
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="/backgrounds/background.jpg"
      bgSize="cover"
    >
      <Flex>
        <Header selectedMenu={1} />
        {!showEmpty && (
          <div
            className="mount-animation"
            style={{ position: 'absolute', bottom: 60, left: 100 }}
          >
            <Image
              w="360px"
              p="20"
              src={'/probes/probe_' + (currentProbe.colorCode + 1) + '.png'}
              style={{
                transform: `rotate(-30deg)`,
              }}
            />
          </div>
        )}
        {!showEmptyMore && (
          <div
            className="mount-animation"
            style={{ position: 'absolute', right: 90, top: 120 }}
          >
            <Flex direction="column" gap="16px">
              <ArchiveContent
                title={currentProbe.title}
                content={currentProbe.content}
                dateTime={currentProbe.createdAt
                  .split('.')[0]
                  .replace('T', ' ')}
              />
              <Flex justify="flex-end" gap="16px">
                <Button
                  bgColor="whiteAlpha.800"
                  width="100px"
                  onClick={onClickDelete}
                >
                  삭제하기
                </Button>
              </Flex>
            </Flex>
          </div>
        )}
      </Flex>
    </Box>
  );
};

export default DetailAway;
