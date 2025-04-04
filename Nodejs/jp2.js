var fs=require("fs");
const s={d:{a:10,b:20,c:[30,10]}}
fs.writeFileSync("s2.txt",JSON.stringify(s));

var data=fs.readFileSync("s2.txt","utf-8");
var d1=JSON.parse(data);
var add=d1.d.a+d1.d.b;
var sub=Math.abs(d1.d.c[1]-d1.d.b);
var mul=d1.d.c[0]*d1.d.c[1];
fs.appendFileSync("s2.txt","\n addition "+add+"\n subtraction"+sub+"\n multiplication"+mul)