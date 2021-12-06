const express = require('express')
const router = express.Router()

// vendingMachine/index
router.get('/index', (req, res) => {
    res.render('vendingMachine/index.html')
})

router.post('/order', (req, res) => {
    let money = req.body.money;
    res.send(money);
    //res.send(req.body.money)
    // if(money > 2000){
    //     console.log("딸기우유 구매 가능")
    // }
})

// router.post('/result', (req, res) => {
//     res.send(req.body)
// })

module.exports = router