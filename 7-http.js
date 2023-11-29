const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcom to the home page')
    }
    if(req.url ==='/about'){
        res.end('about page')
    }
    res.end(`<h1>Opps</h1>`)
})
server.listen(5000);