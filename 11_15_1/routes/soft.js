const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('school')
})

router.get('/view', (req, res) => {
    // nunjucks.configure('template', 이걸 적어줬기 때문에 template 이후 경로만 작성
    res.render('soft/main.html', {
        message : 'hellooooo'
    })
})

router.get('/yydh', (req, res) => {
    res.render('soft/main.html', {
        name : '홍길동',
        school : '양영디지털고등',
        department : '소프트과'
    })
})

router.get('/other', (req, res) => {
    res.render('soft/main.html', {
        name : '김미미',
        school : '양영중',
        department : '2반'
    })
})

module.exports = router