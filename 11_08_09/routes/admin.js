const express = require('express')
const router = express.Router() // express 안에 존재하는 router 기능

router.get('/', (req, res) => {
    res.send('admin 이후 url')
})

router.get('/products', (req, res) => {
    res.send('admin products')
})

module.exports = router