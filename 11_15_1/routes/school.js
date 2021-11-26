const express = require('express')
const router = express.Router()

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

module.exports = router