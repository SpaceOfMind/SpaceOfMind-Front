import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Chrono } from 'react-chrono';
import { getCookie } from '../../utils/cookie';
import ArchiveItem from '../../components/ArchiveItem/ArchiveItem';
import Header from '../../components/Header';

import { PiPlanetFill } from 'react-icons/pi';
import { MdRocketLaunch } from 'react-icons/md';

import './Archive.scss';

// TODO: json parsing 에러 처리
// local storage에 저장된 데이터가 없는 경우 enable refresh

// user id를 어딘가에 저장해두도록...

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateItems:
        JSON.parse(window.sessionStorage.getItem('fetchedDateItems')) || [],
      customContents:
        JSON.parse(window.sessionStorage.getItem('fetchedContents')).map(
          (item, i) => {
            return (
              <ArchiveItem
                key={i}
                titleArchive={item.titleArchive}
                from={item.from ?? ''}
                contentArchive={item.contentArchive}
              />
            );
          }
        ) || [],
      chronoHeight: document.documentElement.clientHeight - 84,
      chronoIcons:
        (
          <div
            className="chrono-icons"
            style={{ backgroundColor: 'transparent' }}
          >
            {JSON.parse(window.sessionStorage.getItem('fetchedContents')).map(
              (item, i) => {
                return item.isAround ? (
                  <PiPlanetFill key={i} color="#ffffff" width="40px" height="40px" />
                ) : (
                  <MdRocketLaunch key={i} color="#ffffff" width="20px" height="20px" />
                );
              }
            )}
          </div>
        ) || [],
    };
  }

  calculateHeight = () => {
    const viewportHeight = document.documentElement.clientHeight - 84;
    this.setState({ chronoHeight: viewportHeight - 84 });
  };

  componentDidMount() {
    console.log(`파싱된 쿠키: ${getCookie('connect.sid')}`);
    this.calculateHeight();
    window.addEventListener('resize', this.calculateHeight);
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    window.removeEventListener('resize', this.calculateHeight);
  }

  render() {
    const { dateItems, customContents, chronoIcons, viewportHeight } =
      this.state;
    return (
      <Box
        w="100%"
        h="100vh"
        bgImage="/backgrounds/background.jpg"
        bgSize="cover"
      >
        <Flex direction="column">
          <Header selectedMenu={2} />
          <Box
            h={
              document.documentElement.clientHeight - 84 > 0
                ? document.documentElement.clientHeight - 84
                : '400px'
            }
            className={`chrono-container ${dateItems.length===0 ? 'empty' : ''}`}
          >
            <Chrono
              items={dateItems}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: '#718fa7',
                secondary: 'transparent',
                cardBgColor: '#C0C4DE',
                titleColor: '#88a2bd',
                titleColorActive: '#ffffff',
                cardTitleColor: '#144B71',
              }}
            >
              {customContents}
              {chronoIcons}
            </Chrono>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default Archive;
