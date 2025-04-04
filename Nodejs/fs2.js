var fs=require("fs");
fs.writeFileSync("node/sort.txt", "50 -1 99 100 20 41 0 62");
data=fs.readFileSync("node/sort.txt","utf8");
d=data.split(" ");
d1=d.sort((a,b)=>a-b);
console.log(d1);