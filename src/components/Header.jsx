import React, { useEffect } from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { getCookie } from '../utils/cookie';

const Header = ({ selectedMenu }) => {
  const navigate = useNavigate();

  const fetchArchiveData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: BASE_URL + '/archive/getAll',
        params: { userId: 1 },
        headers: {
          'Content-type': 'application/json',
          Cookie: getCookie('connect.sid'),
        },
      });

      if (res.data.result === 'success') {
        const fetchedContents = [];
        const fetchedDateItems = [];
        res.data.archives.forEach((archive, index) => {
          fetchedDateItems.push({
            title: archive.createdAt.split('.')[0].replace('T', ' '),
          });
          fetchedContents.push({
            titleArchive: archive.title,
            contentArchive: archive.content,
          });
        });

        window.sessionStorage.setItem(
          'fetchedContents',
          JSON.stringify(fetchedContents)
        );
        window.sessionStorage.setItem(
          'fetchedDateItems',
          JSON.stringify(fetchedDateItems)
        );

        return true;
      }

      return false;
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
      return false;
    }
  };

  const moveToAround = async () => {
    if (!sessionStorage.getItem('satellites')) {
    }
    navigate('/around');
  };
  const moveToAway = () => {
    navigate('/away');
  };
  const moveToArchive = async () => {
    // TODO: local storage가 비었을 때 fetch 해오도록 함
    fetchArchiveData().then(() => {
      navigate('/archive');
    });
  };
  const moveToMyPlanet = () => {
    navigate('/around');
  };

  // TODO: nav link로 바로 이동하지 말고, 각각 fetch 해야되는 데이터 fetch 한 뒤에 라우팅 되도록 함
  const navItems = [
    { menuText: '가까이 보기', nav: moveToAround },
    { menuText: '멀리 보기', nav: moveToAway },
    { menuText: '마음 기록', nav: moveToArchive },
    { menuText: '내 행성', nav: moveToMyPlanet },
  ];

  return (
    <Flex w="100%" h="84px" p="6px" justify="space-between">
      <Image // 로고 placeholder
        m="2px"
        boxSize="60px"
        src="/robot-run.gif"
        cursor="pointer"
      />
      <Flex align="center" justify="space-around" m="6px" p={3}>
        {navItems.map((item, index) => {
          return (
            <Button
              key={index}
              color="whiteAlpha.600"
              bg="transparent"
              isActive={selectedMenu === index}
              _hover={{
                transform: 'scale(1.1)',
              }}
              _active={{ transform: 'scale(1.1)', color: 'whiteAlpha.900' }}
              onClick={item.nav}
            >
              {item.menuText}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;
