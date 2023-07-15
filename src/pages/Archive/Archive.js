import { Chrono } from 'react-chrono';

// TODO: Archive 페이지 자체를 여러개 두도록...
// 10개씩 끊어서 혹은 월별로 끊어서 paging
const Archive = () => {
  const items = [
    {
      title: 'May 12 1940',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'May 13 1940',
      cardTitle: 'Dunkirk',
      cardSubtitle:
        '노는게 제일 좋아 친구들 모여라 언제나 즐거워 개구쟁이 뽀로로',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'June 01 1941',
      cardTitle: 'Dunkirk',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'June 13 1941',
      cardTitle: '기록을 합시다 기록을 합시다',
      cardDetailedText:
        'An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer. The application programs make use of the operating system by making requests for services through a defined application program interface (API). In addition, users can interact directly with the operating system through a user interface, such as a command-line interface (CLI) or a graphical UI (GUI). An operating system brings powerful benefits to computer software and software development. Without an operating system, every application would need to include its own UI, as well as the comprehensive code needed to handle all low-level functionality of the underlying computer, such as disk storage, network interfaces and so on. Considering the vast array of underlying hardware available, this would vastly bloat the size of every application and make software development impractical.         Instead, many common tasks, such as sending a network packet or displaying text on a standard output device, such as a display, can be offloaded to system software that serves as an intermediary between the applications and the hardware. The system software provides a consistent and repeatable way for applications to interact with the hardware without the applications needing to know any details about the hardware.',
    },
    {
      title: 'July 1942',
      cardTitle: 'Dunkirk',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
    {
      title: 'August 1942',
      cardTitle: 'Dunkirk',
      cardSubtitle:
        'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText:
        'Men of the British Expeditionary Force (BEF) wade out to..',
    },
  ];

  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        primary: '#718fa7',
        secondary: '#1d6291',
        cardBgColor: '#f7e8e1',
        titleColor: '#88a2bd',
        titleColorActive: '#ffffff',
      }}
    />
  );
};

export default Archive;
