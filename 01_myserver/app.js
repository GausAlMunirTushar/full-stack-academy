const http = require('http');


const server = http.createServer((req, res) => {
    console.log(`Request comming..`)
    const html = `<h1>Hello Backend</h1>`
    res.write(html)
    res.statusCode = 200;
    res.end()
});

server.listen(8080, () => {
    console.log(`Server running on PORT 8080`)
})