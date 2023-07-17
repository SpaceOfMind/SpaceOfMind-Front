import React, { useState, useEffect } from "react";
import {
    Flex,
    Button,
    Box,
    Input,
    Spacer, 
    Grid,
} from '@chakra-ui/react';
import { Probe1, Probe2, Probe3, Probe4 } from "./Probes/Probe";

export const CreateNewProbeInput = ({ handleZoomOut, fetchCurrentProbeCode }) => {

    // input 관리
    const [inputs, setInputs] = useState({
        title: '',
        destination: '',
        content: ''
    });

    const { title, destination, content } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
          title: '',
          destination: '',
          content: ''
        });
    };

    // input 보내기
    const handleSendProbe = () => {

        // 빈 자리 check
        const validTitle = title !== '';
        const validContent = content !== '';

        if (validTitle && validContent) {
            console.log("탐사선 보내기 진행");
            console.log(`{ title: ${title}, destination: ${destination}, content: ${content}}`);

            const probeCode = fetchCurrentProbeCode();

            console.log("보낸 탐사선 코드: ", probeCode);
        }

        // reset
        onReset();
    }

    return (
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
                <Grid
                    templateColumns="70% 30%"
                    gap={1}
                    marginRight={1}
                    marginBottom={1}
                >
                    <Input 
                        name='title'
                        onChange={onChange}
                        value={title}
                        placeholder='제목' 
                        color='white' 
                        fontSize='0.7em'
                        borderColor='whiteAlpha.500'
                    />
                    <Input
                        name='destination'
                        onChange={onChange}
                        value={destination}
                        placeholder="목적지"
                        color='white'
                        fontSize='0.7em'
                        borderColor='whiteAlpha.500'
                    />
                </Grid>
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
                    onClick={handleSendProbe}
                >보내기</Button>
                <Spacer />
            </Flex>
        </Flex>
    )
};

export const CreateNewProbeImg = ({ updateCurrentProbeCode }) => {

    // probe 종류
    const probes = [<Probe1 />, <Probe2 />, <Probe3 />, <Probe4 />];

    const [currentProbeIndex, setCurrentProbeIndex] = useState(0);

    const changeProbe = () => {

        const newIndex = (currentProbeIndex + 1) % probes.length;

        setCurrentProbeIndex((prevIndex) => (prevIndex + 1) % probes.length);
        updateCurrentProbeCode(newIndex);
    }

    useEffect(() => {
        // parent 한테 0부터 다시 시작함을 알려줘야 함
        if (currentProbeIndex === 0) {
            updateCurrentProbeCode(currentProbeIndex);
        }
    }, [currentProbeIndex, updateCurrentProbeCode]);

    return (
        <Box 
            onClick={changeProbe} 
            marginLeft={3}
            _hover={{transform: 'scale(1.05)'}}
        >
            {probes[currentProbeIndex]}
        </Box>
    );

};