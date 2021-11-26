const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('soft')
})

router.get('/java', (req, res) => {
    res.send('java')
})

router.get('/algo', (req, res) => {
    res.send('algo')
})

router.get('/db', (req, res) => {
    res.send('db')
})

module.exports = router