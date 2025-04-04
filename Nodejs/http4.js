var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    var q=url.parse(req.url,true).query;
    var add=parseInt(q.a)+parseInt(q.b);
    res.end(add+"");
}).listen(3005);