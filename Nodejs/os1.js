var os=require("os");
console.log(os.arch());
console.log(os.hostname()); //returns name of system
console.log(os.platform);//whether windows or linux
console.log(os.tmpdir()); //path to temporary
var fm=os.freemem();
console.log(fm);
var k=fm/1024/1024/1024;//for gb output size
console.log(k);

