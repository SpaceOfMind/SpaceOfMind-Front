import React, { useState, useEffect } from 'react';
import { Flex, Button, Spacer } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { PiPlanetFill } from 'react-icons/pi';
import { MdRocketLaunch } from 'react-icons/md';
import {
  CreateNewSatelliteInput,
  CreateNewSatelliteImg,
} from './CreateNewSatellite';
import { CreateNewProbeInput, CreateNewProbeImg } from './CreateNewProbe';
import './CreateNewObject.scss';

// 확대 시 component
const CreateNewObject = ({ isZoomedIn, handleZoomOut }) => {
  // 인공위성 만들기 or 탐사선 만들기
  const [showCreateNewSatellite, setShowCreateNewSatellite] = useState(true);

  const handleSatelliteButtonClick = () => {
    if (!showCreateNewSatellite) {
      setShowCreateNewSatellite(true);
    }
  };

  const handleProbeButtonClick = () => {
    if (showCreateNewSatellite) {
      setShowCreateNewSatellite(false);
    }
  };

  // 인공위성 code
  const [currentSatelliteCode, setCurrentSatelliteCode] = useState(0);

  const updateCurrentSatelliteCode = newCode => {
    setCurrentSatelliteCode(newCode);
  };

  const fetchCurrentSatelliteCode = () => {
    return currentSatelliteCode;
  };

  // 탐사선 code
  const [currentProbeCode, setCurrentProbeCode] = useState(0);

  const updateCurrentProbeCode = newCode => {
    setCurrentProbeCode(newCode);
  };

  const fetchCurrentProbeCode = () => {
    return currentProbeCode;
  };

  // render 할 위성들 정보
  const [satellitesToRender, setSatellitesToRender] = useState([]);

  const updateSatellitesToRender = fetched => {
    // TODO: session storage에서 받아옴
    setSatellitesToRender(fetched);
  };

  // render 할 탐사선 정보
  const [probesToRender, setProbesToRender] = useState([]);

  const updateProbesToRender = fetched => {
    setProbesToRender(fetched);
  };

  useEffect(() => {
    console.log('satellites to render: ', satellitesToRender);
  }, [satellitesToRender]); // render 할 위성 정보 다시 가져옴

  useEffect(() => {
    console.log('probes to render: ', probesToRender);
  }, [probesToRender]); // render 할 탐사선 정보 다시 가져옴

  return (
    <Flex
      position="absolute"
      bottom={0}
      align="center"
      justify="center"
      w="100%"
      h="50%"
      className={`new-container ${isZoomedIn ? 'visible' : ''}`}
      zIndex={2}
      direction="column"
    >
      <Flex direction="row" zIndex={4} position="absolute" bottom={105} p={5}>
        <Flex
          direction="column"
          m={2}
          p={2}
          justify="space-around"
          marginRight={5}
          gap={2}
        >
          <Spacer />
          <Button
            fontSize="0.7em"
            bg="transparent"
            color={showCreateNewSatellite ? 'white' : 'whiteAlpha.600'}
            _hover={{
              transform: 'scale(1.1)',
            }}
            _active={{
              transform: 'scale(1.1)',
              bg: 'whiteAlpha.200',
            }}
            leftIcon={<Icon as={PiPlanetFill} />}
            onClick={handleSatelliteButtonClick}
          >
            인공위성
          </Button>
          <Button
            fontSize="0.7em"
            bg="transparent"
            color={showCreateNewSatellite ? 'whiteAlpha.600' : 'white'}
            _hover={{
              color: 'whiteAlpha.900',
              transform: 'scale(1.1)',
            }}
            _active={{
              color: 'whiteAlpha.900',
              transform: 'scale(1.1)',
              bg: 'whiteAlpha.200',
            }}
            leftIcon={<Icon as={MdRocketLaunch} />}
            onClick={handleProbeButtonClick}
          >
            탐사선
          </Button>
          <Spacer />
        </Flex>
        {showCreateNewSatellite ? (
          <CreateNewSatelliteInput
            handleZoomOut={handleZoomOut}
            fetchCurrentSatelliteCode={fetchCurrentSatelliteCode}
            updateSatellitesToRender={updateSatellitesToRender}
          />
        ) : (
          <CreateNewProbeInput
            handleZoomOut={handleZoomOut}
            fetchCurrentProbeCode={fetchCurrentProbeCode}
            updateProbesToRender={updateProbesToRender}
          />
        )}
      </Flex>
      <Flex position="absolute" bottom={2} zIndex={3}>
        {showCreateNewSatellite ? (
          <CreateNewSatelliteImg
            updateCurrentSatelliteCode={updateCurrentSatelliteCode}
          />
        ) : (
          <CreateNewProbeImg updateCurrentProbeCode={updateCurrentProbeCode} />
        )}
        <Spacer bg="transparent" w="300px"></Spacer>{' '}
        {/* hard coding 괜찮은가 */}
      </Flex>
    </Flex>
  );
};

export default CreateNewObject;
