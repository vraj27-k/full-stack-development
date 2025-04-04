var url=require("url");
var fs=require("fs");
var addr="http://localhost:8080/test?year=2025&month=march";
var u=url.parse(addr,true);
var u1=JSON.stringify(u.query);
fs.writeFile("U1.txt",u1,(e)=>{
    if(e){
        console.log(e);
    }
    else{
        console.log("File created successfully");
    }
    fs.readFile("U1.txt","utf-8",(e,d)=>
    {
        if (e){
            console.log(e);
        }
        else{
            var d1=JSON.parse(d);
            console.log(d1.year);
        }
    })
})