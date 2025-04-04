const msg=function(){
    console.log("Hello World");
}
setTimeout(msg,5000);
setTimeout(function(){
    console.log("This is a callback function");
},3000);

setTimeout(()=>{
    console.log("This is a lambda function");
},2000);
