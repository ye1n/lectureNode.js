const express = require('express')
const nunjucks = require('nunjucks')
const admin = require('./routes/admin')
const app = express()

nunjucks.configure('template', {
    autoescape : true,
    express : app
})

app.listen(3000, ()=>{
    console.log('Server on')
}) 

app.get('/', (req, res) =>{
    res.send('/')
})

app.use('/admin', admin)