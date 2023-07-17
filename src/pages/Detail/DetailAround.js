import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Detail.scss';

const DetailAround = () => {
  const { objectId } = useParams();
  const [showEmpty, setShowEmpty] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmpty(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!showEmpty && (
        <div className="mount-animation">
          <Image p="20" src="/satellites/satellite_3.png" />
        </div>
      )}
    </>
  );
};

export default DetailAround;
