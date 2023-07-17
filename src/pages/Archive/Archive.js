import React, { Component } from 'react';
import axios from 'axios';
import { Chrono } from 'react-chrono';
import { BASE_URL } from '../../constant';
import { getCookie } from '../../utils/cookie';
import ArchiveItem from '../../components/ArchiveItem/ArchiveItem';

// TODO: json parsing 에러 처리
// local storage에 저장된 데이터가 없는 경우 enable refresh

// user id를 어딘가에 저장해두도록...

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateItems:
        JSON.parse(window.localStorage.getItem('fetchedDateItems')) || [],
      customContents:
        JSON.parse(window.localStorage.getItem('fetchedContents')).map(
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
    };
  }

  componentDidMount() {
    console.log(`파싱된 쿠키: ${getCookie('connect.sid')}`);
  }

  fetchData = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: BASE_URL + '/archive/getAll',
        params: { userId: 1 }, // TODO: userId local Storage에 저장하기
        headers: {
          'Content-type': 'application/json',
          Cookie: getCookie('connect.sid'), // TODO: react-cookie 잘 가져와지는지 test
        },
      });

      if (res.data.result === 'success') {
        console.log(`success to fetch data!`);
        const fetchedContents = [];
        const fetchedDateItems = [];
        res.data.archives.forEach((archive, index) => {
          fetchedDateItems.push({
            title: archive.createdAt.split('.')[0].replace('T', ' '),
          });
          fetchedContents.push(
            <ArchiveItem
              keyArchive={index}
              titleArchive={archive.title}
              contentArchive={archive.content}
            />
          );
        });

        console.log(`length of fetchedContents: ${fetchedContents.length}`);
        console.log(`length of fetchedDateItems: ${fetchedDateItems.length}`);

        this.setState(
          {
            dateItems: [...fetchedDateItems],
            customContents: [...fetchedContents],
          },
          this.forceUpdate()
        );
      }
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
    }
  };

  render() {
    const { dateItems, customContents } = this.state;
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
  }
}

export default Archive;
