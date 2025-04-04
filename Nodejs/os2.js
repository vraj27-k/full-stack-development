var fs=require("fs");
var os=require("os");
var tmp=os.tmpdir();
var fm=os.freemem()/1024/1024/1024;
//fs.mkdirSync(tmp+"/AA");
if(fm>1){
    fs.writeFileSync(tmp+"/AA/temp.txt","sufficent memory");
}
else{
fs.writeFileSync(tmp+"/AA/temp.txt","Insufficent memory");
}