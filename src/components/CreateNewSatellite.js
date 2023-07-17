import React, { useState, useEffect } from "react";
import {
    Flex,
    Button,
    Box,
    Input,
    Spacer
} from '@chakra-ui/react';
import { Satellite1, Satellite2, Satellite3, Satellite4 } from './Satellites/Satellite';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CreateNewSatelliteInput = ({ handleZoomOut, fetchCurrentSatelliteCode }) => {

    const navigate = useNavigate();

    // input 관리
    const [inputs, setInputs] = useState({
        title: '',
        content: ''
    });

    const { title, content } = inputs;

    const onReset = () => {
        setInputs({
          title: '',
          content: '',
        })
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // input 보내기
    const handleSendSatellite = () => {

        // 빈 자리 check
        const validTitle = title !== '';
        const validContent = content !== '';

        if (validTitle && validContent) {
            console.log("인공위성 보내기 진행");
            console.log(`{ title: ${title}, content: ${content}}`);

            const satelliteCode = fetchCurrentSatelliteCode();

            /*axios
                .post(
                    '/around/postInfo',
                    { userId: '' , aroundCode: '', orbitId: '', title: title, content: content},
                    {
                    headers: { 'Content-type': 'application/json' },
                    withCredentials: true,
                    }
                )
                .then(res => {
                    if (res.data.result === 'success') {
                        console.log("위성 발사 성공");
                        navigate('/');
                    }
                })
                .catch(err => {
                    console.log(err);
                });*/
                
                console.log("보낸 위성 코드: ", satelliteCode);

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
                    onClick={handleSendSatellite}
                >보내기</Button>
                <Spacer />
            </Flex>
        </Flex>
    )
};

export const CreateNewSatelliteImg = ({ updateCurrentSatelliteCode }) => {

    // satellite 종류
    const satellites = [<Satellite1 />, <Satellite2 />, <Satellite3 />, <Satellite4 />];

    const [currentSatelliteIndex, setCurrentSatelliteIndex] = useState(0);

    const changeSatellite = () => {
        const newIndex = (currentSatelliteIndex + 1) % satellites.length;

        setCurrentSatelliteIndex((prevIndex) => (prevIndex + 1) % satellites.length);
        updateCurrentSatelliteCode(newIndex);
    }

    useEffect(() => {
        // parent 한테 0부터 다시 시작함을 알려줘야 함
        if (currentSatelliteIndex === 0) {
            updateCurrentSatelliteCode(currentSatelliteIndex);
        }
    }, [currentSatelliteIndex, updateCurrentSatelliteCode]);


    return (
        <Box
            onClick={changeSatellite} 
            _hover={{transform: 'scale(1.05)'}}
        >
            {satellites[currentSatelliteIndex]}
        </Box>
    );

};