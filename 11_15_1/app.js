const express = require('express') //다른 문서 불러오는 import역할 : require
const admin = require('./routes/admin') //admin.js 파일 가져오기
const school = require('./routes/school')
const soft = require('./routes/soft')
const nunjucks = require('nunjucks')
const app = express() 
const port = 3000 // 열 포트 번호

//                  폴더 이름
nunjucks.configure('template', {
    autoescape : true, // 여기서 작성되는 모든 코드는 text 처리
    express : app
})

app.listen(port, ()=>{
    console.log('Server ON ! !')
})

app.get('/', (req, res) => {
    res.send('hello expresssss')
})

app.use('/school', school)
app.use('/admin', admin)
app.use('/soft', soft)

app.get('/yydh', (req, res) => {
    res.send('성공')
})

// nunjucks : node에서 html값을 화면에 표시하고 node값을 전달할때 사용, view engine
// 1. nunjucks 로드 (app.js)
// 2. 템플릿 파일 작성 (모든 파일에 공통적인 부분을 템플릿 화) (template/soft/main.html)
// 3. 렌더링 (데이터를 입히는 작업)