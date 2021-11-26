const express = require('express')
const router = express.Router()

router.get('/free', (req, res) =>{
    res.render('board/free.html', {
    })
})

router.get('/etc', (req, res) =>{
    res.render('board/etc.html', {
    })
})

module.exports = router