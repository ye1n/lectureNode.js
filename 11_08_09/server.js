const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('\My name is yein')
    res.end()
}).listen(3000) // listen : 포트개방