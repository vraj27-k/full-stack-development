var fs=require("fs");
var pm=require("path");
var p="D:/LJ/abc/temp/a.html";
var dn=pm.dirname(p);
var bn=pm.basename(p);
var en=pm.extname(p);
var path=pm.parse(p);
console.log(dn);
console.log(bn);
console.log(en);console.log(path);    
if(en==".txt"){
    fs.writeFileSync("path.txt","extension should be .html");
}
else{
    fs.writeFileSync("path.txt","extension is corect");

}


