const eventemitter=require("events");
const ee=new eventemitter();
ee.on("start",(a,b)=>{
    console.log("Multiplication is "+a*b);
    console.log("event completed");
    ee.emit("end");
})
ee.on("end",()=>{console.log("ended")});
ee.emit("start",3,2);