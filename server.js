const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

// CORS 이슈 해결
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, '/build')));

// 메인페이지 접속 시 build 폴더의 index.html 보내줘
app.get('/', (res, req) => {
  req.sendFile(path.join(__dirname, '/build/index.html'));
})

app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html'));
  });
  

http.listen(443, () => {
    // 서버가 정상적으로 실행되면 콘솔창에 이 메시지를 띄워줘
    console.log("Listening on 443");
  });
  