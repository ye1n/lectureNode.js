const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const app = express() // 기능 뽑아오기
const port = 3000

nunjucks.configure('template' , {
    autoescape : true,
    express : app
})

app.listen(port, ()=>{
    console.log('Server On !!')
})

// 경로 정리 router -> routes 폴더

// 중간에 거쳐가는 미들웨어
app.use('/admin', admin)
app.use(express.json()) // express에서 파싱할때 json형식을 사용한다

// query-string 모듈 사용
app.use(express.urlencoded({extended : false}))


// 여기 next에  testMiddleware2, (req, res) => {
//    res.send("기본 홈 입니다.") 이 내용이 들어간다, 순차적 실행

function testMiddleware1(req, res, next){
    console.log('첫번째 미들웨어 실행 !')
    next()
}

function testMiddleware2(req, res, next){
    console.log('두번째 미들웨어 실행 !')
    next()
}

// 가운데에 실행할 함수 넣기
// 두개 함수 실행하고 싶으면 그냥 두개 나란히 넣으면 된다
app.get('/', testMiddleware1, testMiddleware2, (req, res) => {
    res.send("기본 홈 입니다.")
    // base.html 에서 input name 가져오기
    // 사용하기 위해선 두줄 추가
    // app.use(express.json())
    // app.use(express.urlencoded({extended : false}))
    res.body.description
})

// 자료를 가공하면 정보
// 필요한 정보를 가공하는 것이 파싱
// bodyparser 바디파서

// uploads 경로는 uploads 여기서 찾겠다
// uploads 폴더안에 사진 가져오기
app.use('/uploads', express.static('uploads'))