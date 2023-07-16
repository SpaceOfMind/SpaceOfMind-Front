import axios from 'axios';
import { useEffect, useState } from 'react';
import { Chrono } from 'react-chrono';
import { BASE_URL } from '../../constant';
import { getCookie } from '../../utils/cookie';
import ArchiveItem from '../../components/ArchiveItem/ArchiveItem';

// TODO: Archive 페이지 자체를 여러개 두도록...
// 10개씩 끊어서 혹은 월별로 끊어서 paging

// customContent는 cardDetailedText를 대체하는 듯... width를 100%로 채우면 예쁘게 채워짐!
// ',' 단위로 끊게됨

// secondary color를 transparent로 채우고, icon을 planet 혹은 로켓으로 설정(이채가 쓴 아이콘이랑 통일)

const Archive = () => {
  const [customContents, setCustomContents] = useState([]);
  const [dateItems, setDateItems] = useState([]);

  useEffect(() => {
    // 여기서 배열을 생성하고 배열 전체를 setState로 state 설정
    const contents = [];
    const dateItems = [];
    console.log(`파싱된 쿠키: ${getCookie('connect.sid')}`);

    axios({
      method: 'get',
      url: BASE_URL + '/archive/getAll',
      params: { userId: 1 }, // TODO: userId local Storage에 저장하기
      headers: {
        'Content-type': 'application/json',
        Cookie: getCookie('connect.sid'), // TODO: react-cookie 잘 가져와지는지 test
      },
    }).then(res => {
      if (res.data.result === 'success') {
        res.data.archives.forEach((archive, index) => {
          console.log(`createdAt: ${archive.createdAt}`);
          dateItems.push({
            title: archive.createdAt.split('.')[0].replace('T', ' '),
          });
          contents.push(
            <ArchiveItem
              key={index}
              titleArchive={archive.title}
              contentArchive={archive.content}
            />
          );
        });
        setCustomContents(contents);
        setDateItems(dateItems);
      }
      // TODO: error handler for getting archive data from server
    });
  }, []); // Archive 컴포넌트가 처음 마운트 될 때만 동작하도록 함

  // const items = [
  //   {
  //     title: 'May 12 1940',
  //   },
  //   {
  //     title: 'May 13 1940',
  //     cardTitle: 'Dunkirk',
  //     cardSubtitle:
  //       '노는게 제일 좋아 친구들 모여라 언제나 즐거워 개구쟁이 뽀로로',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   },
  //   {
  //     title: 'June 13 1941',
  //     cardTitle: '기록을 합시다 기록을 합시다',
  //     cardDetailedText:
  //       'An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer. The application programs make use of the operating system by making requests for services through a defined application program interface (API). In addition, users can interact directly with the operating system through a user interface, such as a command-line interface (CLI) or a graphical UI (GUI). An operating system brings powerful benefits to computer software and software development. Without an operating system, every application would need to include its own UI, as well as the comprehensive code needed to handle all low-level functionality of the underlying computer, such as disk storage, network interfaces and so on. Considering the vast array of underlying hardware available, this would vastly bloat the size of every application and make software development impractical.         Instead, many common tasks, such as sending a network packet or displaying text on a standard output device, such as a display, can be offloaded to system software that serves as an intermediary between the applications and the hardware. The system software provides a consistent and repeatable way for applications to interact with the hardware without the applications needing to know any details about the hardware.',
  //   },
  //   {
  //     title: 'July 1942',
  //     cardTitle: 'Dunkirk',
  //     cardSubtitle:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //     cardDetailedText:
  //       'Men of the British Expeditionary Force (BEF) wade out to..',
  //   },
  // ];

  const sampleDateItems = [{ title: 'July 1000' }];
  const sampleContents = [
    <ArchiveItem key={1} titleArchive="title" contentArchive="content" />,
    // <div>hello</div>,
  ];

  return (
    <Chrono
      items={dateItems}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: '#718fa7',
        secondary: '#1d6291',
        cardBgColor: '#f7e8e1',
        titleColor: '#88a2bd',
        titleColorActive: '#ffffff',
        cardTitleColor: '#1d6291',
      }}
    >
      {customContents}
    </Chrono>
  );
};

export default Archive;
