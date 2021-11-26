const express = require('express')
const nunjucks = require('nunjucks')
const board = require('./routes/board')
const app = express()
const port = 3000

nunjucks.configure('template', {
    autoescape : true,
    express : app
})

app.listen(port, ()=>{
    console.log('Server on')
}) 

app.get('/', (req, res) =>{
    res.send('/')
})

app.use('/board', board)

// 템플릿의 상속(물려받는 것)
// 데이터 혹은 그 형식을 물려주는 것
// 자식은 자신의 템플릿과 부모의 템플릿 모두 쓸수있어야 한다

// 부모를 사용하는 것에 차이
// extends : 확장하다 -> 부모에게 물려받지만 안써도 써도 된다
// implements : 구현하다 -> 부모에게 물려받은걸 반드시 써야 한다 (실무에서 주사용)

// 부트스트랩 : .com -> get started -> css copy

// html nodemon 작동은 (nodemon은 js, node만 작업)
// package.json에 "start" : "nodemon -e js,html app.js"