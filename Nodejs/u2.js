var url=require("url");
var addr="https://lju.com:8080/test?year=2025&month=march#about";
var q=url.parse(addr,true);
console.log(q);
if(q.query.year%4==0){
    console.log("leap year")
}
else{
    console.log("not leap year")
}