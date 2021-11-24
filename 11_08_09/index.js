const rst = require('./myvar')
// console.log(rst.a)

const stu = new rst() // 객체 생성
console.log(stu.name)
console.log(stu.hello)

// node.js : 자바스크립트 언어로 서버를 구동하고 관련된 작업 수행

// node 버전 확인 -> node -v
// node 실행 방법 : node '볼 문서'
// ip주소 보는법 : cmd -> ipconfig
// ctrl + c : 서버 내리고 재시작

// npm : node package manager
// npm init -> package.json 생성

// 서버 열기 (node_modules 추가)
// express 설치 : npm i(install도 가능) express
// express 삭제 : npm remove express

// node_modules (프로젝트를 실행할 때 필요한 가져온 라이브러리 모음) 지우고 다시 추가 할땐 npm i
// (다른사람이 만든 node패키지를 다운받았을때 node_modules에 담긴다)

// npm start 지정된 문서 실행 메크로 (package.json에서 "start": "node app.js" 추가)
// npm run yydh 내가 만든 명령어 메크로 실행 (package.json에서 "yydh": "node index.js")