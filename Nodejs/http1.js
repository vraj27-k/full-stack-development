// imp
var http=require("http");
var server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>Welcome Students</h1>");
    res.write("<ul><li>Test</li><li>Test1</li></ul>");
    res.end("<h2>LJ UNIVERSTY</h2>");
});
server.listen(5001,()=>{
    console.log("Server Started");
})