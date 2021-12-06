const express = require('express')
const nunjucks = require('nunjucks')
const vendingMachine = require('./routes/vendingMachine')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/vendingMachine', vendingMachine)

// app.use('/uploads', express.static('uploads'))

app.listen(port, () => {
    console.log('Server ON!')
})

nunjucks.configure('template', {
    autoescape : true,
    express : app
})

app.get('/', (req, res) => {
    res.send('기본 홈입니다.')
    //res.body.name
})