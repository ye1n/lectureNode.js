const express = require('express')
const router = express.Router()

router.get('/write', (req, res) =>{
    res.render('admin/write.html', {
    })
})

module.exports = router