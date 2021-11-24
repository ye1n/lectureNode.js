// console.log('hello world')
// node hello.js 실행

// 변수 내보내기 : module.exports.변수명 = 내보낼 데이터
module.exports.number = 123

// 함수 내보내기 : module.exports = 함수
module.exports = function abc(){
    console.log('abc')
}

// js 문서 불러오기
// 담을 변수 = require('js파일명')
const anotherFile = require('abc') // 확장자가 없게 문서 이름만 작성