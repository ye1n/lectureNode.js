const express = require('express')
const soft = require('./routes/soft')
const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log('Server ON ! !')
})

app.use('/soft', soft)