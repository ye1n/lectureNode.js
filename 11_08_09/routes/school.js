const express = require('express')
const router = express.Router() // express 안에 존재하는 router 기능

// '/' -> localhost:3000/school/ 경로일때
router.get('/', (req, res) => {
    res.send('school')
})

router.get('/soft', (req, res) => {
    res.send('soft')
})

router.get('/bio', (req, res) => {
    res.send('bio')
})

router.get('/skills', (req, res) => {
    res.send('skills')
})

// 가져오려면 내보내는 부분도 있어야 한다
// router을 내보냄
module.exports = router