import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.scss';
import ArchiveContent from '../../components/ArchiveContent';
import { Button } from '@chakra-ui/button';

const DetailObject = () => {
  // TODO: detail around가 처음 마운트 될 때 서버로부터 objectId를 기반으로?? 앵????????
  // 처음 around view 혹은 away view로 들어갈 때 미리 데이터를 fetch 해와서 클릭하면 바로 props로 데이터를 넘겨주도록 함
  // session storage에 어떻게 저장하는지 살펴보고 session storage에서 들고올 수 있는 key를 알아야할 것 같은뎅

  const { userId, objectId } = useParams();
  const [showEmpty, setShowEmpty] = useState(true);
  const [showEmptyMore, setShowEmptyMore] = useState(true);

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
    <>
      {!showEmpty && (
        <div
          className="mount-animation"
          style={{ position: 'absolute', bottom: 0, left: 6 }}
        >
          <Image p="20" src="/satellites/satellite_3.png" />
        </div>
      )}

      {!showEmptyMore && (
        <div
          className="mount-animation"
          style={{ position: 'absolute', right: 90, top: 90 }}
        >
          <Flex direction="column" gap="16px">
            <ArchiveContent
              title="몰입 캠프란 무엇인가?"
              content="스타트업이던, 대기업이던, 중견기업이던, 항상 좋은 인재들이 모자란다고 합니다. 공대생들은 각박한 공부와 경쟁 속에서 지쳐가는 것 같은데, 왜 그럴까요?
              본 코스를 통해서, 다양한 학생들과 함께 자율적으로 개발 경험을 쌓으면서 개발 실력의 향상과 스스로 성장해 나가는 모습을 발견해보세요. 그리고 이런 집중 성장의 경험은 참가자들의 삶에 커다란 긍정적 영향을 끼칩니다. 또한, 여러 스타트업 창업자들의 강연을 통해서, 본인의 삶을 온전히 느낄 수 있는 스타트업의 매력도 접할 수 있으며, 스스로의 삶에 대해서 한 번쯤 돌아보고 방향성을 고민해 볼 수 있는 기회를 제공합니다."
              dateTime="July 16 2023"
            />
            <Flex justify="flex-end" gap="16px">
              <Button bgColor="whiteAlpha.800" width="100px">
                수정하기
              </Button>
              <Button bgColor="whiteAlpha.800" width="100px">
                삭제하기
              </Button>
            </Flex>
          </Flex>
        </div>
      )}
    </>
  );
};

export default DetailObject;
