import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../constant';
import { getCookie } from '../utils/cookie';

const CustomButton = () => {
  const navigate = useNavigate();

  const moveToArchivePage = async () => {
    fetchData().then(() => navigate('/archive'));
  };

  const fetchData = async () => {
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
        console.log(`success to fetch data!`);
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

        console.log(`length of fetchedContents: ${fetchedContents.length}`);
        console.log(`length of fetchedDateItems: ${fetchedDateItems.length}`);

        window.localStorage.setItem(
          'fetchedContents',
          JSON.stringify(fetchedContents)
        );
        window.localStorage.setItem(
          'fetchedDateItems',
          JSON.stringify(fetchedDateItems)
        );
      }
    } catch (error) {
      // Handle errors if necessary
      console.error(error);
    }
  };

  return <Button onClick={moveToArchivePage}>Move!</Button>;
};

export default CustomButton;
