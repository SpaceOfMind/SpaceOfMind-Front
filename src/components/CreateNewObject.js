import React, { useState, useEffect } from 'react';
import {
    Flex,
    Button,
    Box,
    Input,
    Spacer
} from '@chakra-ui/react';
import { Satellite1, Satellite2, Satellite3, Satellite4 } from './Satellites/Satellite';
import { Icon } from '@iconify/react';

// 확대 시 component
const CreateNewObject = ({ isZoomedIn, handleZoomOut }) => {

    // satellite 종류
    const satellites = [<Satellite1 />, <Satellite2 />, <Satellite3 />, <Satellite4 />];

    const [currentSatelliteIndex, setCurrentSatelliteIndex] = useState(0);

    const changeSatellite = () => {
        setCurrentSatelliteIndex((prevIndex) => (prevIndex + 1) % satellites.length);
    }

    useEffect(() => {
        console.log(`Current Satellite Index: ${currentSatelliteIndex}`);
    }, [currentSatelliteIndex]);

    // input 관리
    const [inputs, setInputs] = useState({
        title: '',
        content: ''
    });

    const { title, content } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    
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
            direction='column'
        >
            <Flex
                direction='row'
                zIndex={4}
                position='absolute'
                bottom={105}
                p={5}
            >
                <Flex
                    direction='column'
                    m={2}
                    p={2}
                    justify='space-around'
                    marginRight={5}
                    gap={2}
                >
                    <Spacer />
                    <Button 
                        fontSize='0.7em'
                        bg='transparent'
                        color='white'
                        _hover={{
                            transform: 'scale(1.1)'
                        }}
                        _active={{
                            transform: 'scale(1.1)',
                            bg: 'whiteAlpha.200'
                        }}
                        leftIcon={<Icon 
                                icon="ph:planet-fill" 
                                color="white" 
                                width="15" 
                                height="15"
                            />}
                    >인공위성</Button>
                    <Button 
                        fontSize='0.7em'
                        bg='transparent'
                        color='whiteAlpha.600'
                        _hover={{
                            color: 'whiteAlpha.900',
                            transform: 'scale(1.1)'
                        }}
                        _active={{
                            color: 'whiteAlpha.900',
                            transform: 'scale(1.1)',
                            bg: 'whiteAlpha.200'
                        }}
                        leftIcon={<Icon 
                                icon="ion:rocket-sharp" 
                                color="white" 
                                width="15" 
                                height="15" 
                                opacity="0.6"
                            />}
                    >탐사선</Button>
                    <Spacer />
                </Flex>
                <Flex
                    direction='column'
                    m={2}
                    p={2}
                >
                    <Box
                        p={1}
                        border='1px'
                        borderColor='whiteAlpha.900'
                        borderRadius='lg'
                    >
                        <Input 
                            name='title'
                            onChange={onChange}
                            value={title}
                            placeholder='제목' 
                            color='white' 
                            fontSize='0.7em'
                            marginBottom={1} 
                            borderColor='whiteAlpha.500'
                        />
                        <Input 
                            name='content'
                            onChange={onChange}
                            value={content}
                            placeholder='마음을 실어 보내세요.' 
                            color='white' 
                            fontSize='0.5em' 
                            borderColor='whiteAlpha.500'
                            h='160px'
                        />
                    </Box>
                    <Flex
                        direction='row'
                        marginTop={3}
                    >
                        <Spacer />
                        <Button 
                            onClick={handleZoomOut} 
                            fontSize='0.7em'
                            bg='transparent'
                            color='whiteAlpha.700'
                            border='1px'
                            borderColor='white'
                            borderRadius='full'
                            m={2}
                            paddingInline={9}
                            _hover={{
                                color: 'whiteAlpha.900',
                                bg: 'whiteAlpha.200',
                                transform: 'scale(1.05)'
                            }}
                            _active={{
                                color: 'whiteAlpha.900',
                                transform: 'scale(1.05)',
                                bg: 'whiteAlpha.400'
                            }}
                        >취소하기</Button>
                        <Button 
                            fontSize='0.7em'
                            bg='transparent'
                            color='white'
                            border='1px'
                            borderColor='white'
                            borderRadius='full'
                            m={2}
                            paddingInline={10}
                            _hover={{
                                color: 'whiteAlpha.900',
                                bg: 'whiteAlpha.200',
                                transform: 'scale(1.05)'
                            }}
                            _active={{
                                color: 'whiteAlpha.900',
                                transform: 'scale(1.05)',
                                bg: 'whiteAlpha.400'
                            }}
                        >보내기</Button>
                        <Spacer />
                    </Flex>
                </Flex>
            </Flex>
            <Flex 
                position='absolute'
                bottom={2}
                zIndex={3}
            >
                <div onClick={changeSatellite}>
                    {satellites[currentSatelliteIndex]}
                </div>
                <Spacer bg='transparent' w='300px'></Spacer>       {/* hard coding 괜찮은가 */}
            </Flex>
        </Flex>
    );
};

export default CreateNewObject;