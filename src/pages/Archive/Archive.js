import React, { Component } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Chrono } from 'react-chrono';
import { getCookie } from '../../utils/cookie';
import ArchiveItem from '../../components/ArchiveItem/ArchiveItem';
import Header from '../../components/Header';

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
                contentArchive={item.contentArchive}
              />
            );
          }
        ) || [],
      chronoHeight: document.documentElement.clientHeight - 84,
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
    const { dateItems, customContents, viewportHeight } = this.state;
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
          >
            <Chrono
              items={dateItems}
              mode="VERTICAL_ALTERNATING"
              theme={{
                primary: '#718fa7',
                secondary: '#144B71',
                cardBgColor: '#C0C4DE',
                titleColor: '#88a2bd',
                titleColorActive: '#ffffff',
                cardTitleColor: '#144B71',
              }}
            >
              {customContents}
            </Chrono>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default Archive;
