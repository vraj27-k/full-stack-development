var e=require("events");
var fs=require("fs");
var ee=new e();
ee.on("write",()=>{
    fs.writeFile("t1.txt","Hello",(e)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log("written");
        }
    })
    ee.emit("append");
})
ee.on("append",()=>{
    fs.appendFile("t1.txt","\nWorld",(e)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log("appended");
        }
    })
    ee.emit("read");
})




ee.on("read",()=>{
    fs.readFile("t1.txt","utf-8",(e,d)=>{
        if(e){
            console.log(e);
        }
        else{
            console.log(d);
        }
    })
})
ee.emit("write");