import axios from 'axios';

export const fetchArchives = async (updateCallback, type) => {
  if (!(type === 'All' || type === 'Around' || type === 'Away'))
    console.log('type mismatch');

  console.log('Render할 인공위성 정보 가져오기 진행');

  axios
    .get('archive/get' + type, {
      params: {
        userId: 1, // TODO: dummy
      },
      headers: { 'Content-type': 'application/json' },
    })
    .then(res => {
      if (res.data.result === 'success') {
        console.log('인공위성 정보 가져오기 성공');

        updateCallback(res.data.arounds);
      }
    })
    .catch(err => {
      console.log('인공위성 정보 가져오기 에러');
      console.log(err);
    });
};
