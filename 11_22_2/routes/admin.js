const express = require('express')
const router = express.Router() // router기능 뽑아오기

// admin/write 경로로 왔을때
router.get('/write', (req, res) =>{
    res.render('admin/write.html')
})

router.post('/write', (req, res) =>{
    res.send(req.body)
})

module.exports = router
