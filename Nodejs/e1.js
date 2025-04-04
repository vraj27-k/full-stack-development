const eventemitter=require("events");
const ee=new eventemitter();
ee.on("start",()=>{console.log("event started")});
ee.on("start",()=>{console.log("started again")});
ee.addListener("end",()=>{console.log("event ended")});
console.log("hello")
ee.emit("start")
console.log("test");
