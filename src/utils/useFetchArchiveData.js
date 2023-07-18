import axios from 'axios';
import { useCallback, useContext } from 'react';
import { SatelliteContext } from '../contexts/satellite';
import { ProbeContext } from '../contexts/probe';
import { BASE_URL } from '../constant';
import { getCookie } from './cookie';

function useFetchArchiveData() {
  const { updateSatellite } = useContext(SatelliteContext);
  const { updateProbe } = useContext(ProbeContext);

  const fetchArchives = async () => {
    try {
      const res = await axios({
        method: 'get',
        url: BASE_URL + '/archive/getAll',
        params: { userId: sessionStorage.getItem('userId') },
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

  const fetchSatellites = useCallback(async () => {
    await axios({
      method: 'get', url: BASE_URL + '/archive/getAround',
      params: {
        userId: sessionStorage.getItem('userId'),
      },
      headers: { 'Content-type': 'application/json' },
    }).then(res => {
        if (res.data.result === 'success') {
          console.log('인공위성 정보 가져오기 성공');
          updateSatellite(res.data.arounds);
        }
      })
      .catch(err => {
        console.log('인공위성 정보 가져오기 에러');
        console.log(err);
      });
  }, [updateSatellite]);

  const fetchProbes = useCallback(async () => {
    await axios({
      method: 'get',
      url: BASE_URL + '/archive/getAway',
      params: {
        userId: sessionStorage.getItem('userId'),
      },
      headers: { 'Content-type': 'application/json' },
    }).then(res => {
        if (res.data.result === 'success') {
          console.log('탐사선 정보 가져오기 성공');
          updateProbe(res.data.aways);
        }
      })
      .catch(err => {
        console.log('탐사선 정보 가져오기 에러');
        console.log(err);
      });
  }, [updateProbe]);

  return [fetchArchives, fetchSatellites, fetchProbes];
}

export default useFetchArchiveData;
