var http=require("http");
var url=require("url");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    var q=url.parse(req.url,true).query;
    res.write(q.year+" "+q.month);
    res.end();}).listen(5001);