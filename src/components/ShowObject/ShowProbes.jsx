import React, { useContext } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { ProbeContext } from '../../contexts/probe';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const ShowProbes = () => {
  // 현재 date
  // const currentDate = new Date();

  const navigate = useNavigate();
  const { probes } = useContext(ProbeContext);

  const positions = [
    { x: '60vw', y: '10vh', degree: 120 },
    { x: '34vw', y: '64vh', degree: 165 },
    { x: '16vw', y: '10vh', degree: 155 },
    { x: '76vw', y: '35vh', degree: 20 },
    { x: '15vw', y: '25vh', degree: -30 },
    { x: '50vw', y: '15vh', degree: 45 },
    { x: '10vw', y: '65vh', degree: -15 },
    { x: '68vw', y: '60vh', degree: 5 },
    { x: '30vw', y: '68vh', degree: 25 },
    { x: '20vw', y: '20vh', degree: -10 },
    { x: '10vw', y: '40vh', degree: 10 },
  ];

  /* 더미데이터를 받아서 position을 calculate 하도록... 그걸하고 position에 push */
  // const calculatePosition = (orbitId, dateArray) => {};

  const probesData = probes.map((probe, index) => {
    return {
      position: {
        colorCode: probe.colorCode,
        x: positions[index].x,
        y: positions[index].y,
        degree: positions[index].degree,
      },
      component: (
        <Image
          key={index}
          w="60px"
          h="130px"
          src={'probes/probe_' + (probe.colorCode + 1) + '.png'}
          cursor="pointer"
          backgroundRepeat="no-repeat"
          onClick={() => navigate({ pathname: '/detail/away/' + index })}
        />
      ),
    };
  });

  //   const getPositions = probes => {
  //     probes.map(probe => {
  //       const color = probe.colorCode;
  //       const orbit = probe.orbitId;
  //       const date = probe.createdAt.split('.');

  //       const { x, y } = calculatePosition(orbit, date);
  //     });
  //   };

  return (
    <Flex position="absolute" w="100%" h="90%" top="10%" zIndex={2}>
      <Flex position="relative" w="100%" h="100%">
        {probesData.map((data, index) => (
          <div
            className={classNames('map-object-probe', {
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

export default ShowProbes;
