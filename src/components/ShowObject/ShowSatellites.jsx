import React, { useContext } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { SatelliteContext } from '../../contexts/satellite';
import { useNavigate } from 'react-router-dom';
import './ShowObject.scss';
import classNames from 'classnames';

const ShowSatellites = ({ isZoomedIn }) => {
  const { satellites } = useContext(SatelliteContext);
  const navigate = useNavigate();

  const positions = [
    { x: '7vw', y: '25vh', degree: -45 },
    { x: '55vw', y: '10vh', degree: 10 },
    { x: '70vw', y: '50vh', degree: -15 },
    { x: '20vw', y: '60vh', degree: -15 },
    { x: '20vw', y: '65vh', degree: -10 },
    { x: '76vw', y: '35vh', degree: 30 },
    { x: '10vw', y: '70vh', degree: 45 },
  ];

  const satellitesData = satellites.map((satellite, index) => {
    return {
      position: {
        colorCode: satellite.colorCode,
        x: positions[index].x,
        y: positions[index].y,
        degree: positions[index].degree,
      },
      component: (
        <Image
          key={index}
          w="200px"
          h="105px"
          src={'satellites/satellite_' + (satellite.colorCode + 1) + '.png'}
          cursor="pointer"
          backgroundRepeat="no-repeat"
          onClick={() => navigate({ pathname: '/detail/around/' + index })}
        />
      ),
    };
  });

  return (
    <Flex
      position="absolute"
      w="100%"
      h="70%"
      top="8%"
      zIndex={2}
      className={`show-container ${!isZoomedIn ? 'visible' : ''}`}
    >
      <Flex position="relative" w="100%" h="100%">
        {satellitesData.map((data, index) => (
          <div
            className={classNames('map-object-satellite', {
              reverse: index % 2 === 0,
            })}
            key={index}
            style={{
              position: 'absolute',
              left: data.position.x,
              top: data.position.y,
              transform: `rotate(${data.position.degree}deg)`,
            }}
          >
            {data.component}
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default ShowSatellites;
