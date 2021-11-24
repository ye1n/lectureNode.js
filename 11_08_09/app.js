const express = require('express')
const admin = require('./routes/admin')
const school = require('./routes/school')
const app = express()
const port = 3000

// express로 서버 열기
// listen : port 개방 함수 
app.listen(port, ()=>{
    console.log('Server ON ! !')
}) // 웹 서버 열기

// '/' ->  홈 경로 
// 뒤에 아무 주소도 없을 경우 처리
app.get('/', (req, res) => {
    res.send('hello express')
}) 

// /school로 들어오면 -> school에게
// use : soft라는 주소가 들어가면 soft.js를 찾게 한다
app.use('/school', school)
app.use('/admin', admin)

// localhost:3000/yydh 경로 일때 성공 출력
app.get('/yydh', (req, res) => {
    res.send('성공')
})

// nodemon : 내용 변경시 서버 종료하지 않아도 새로고침시 변경사항 반영
// nodemon 설치하기 : npm i nodemon (npm i -g nodemon node)
// cmd 창에
// 1. cd 뒤에 폴더 경로입력 ex) cd C:\Users\user\Desktop\11_08
// 2. nodemon app.js