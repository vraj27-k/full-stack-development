var url=require("url");
var addr="https://lju.com:8080/test?year=2025&month=march#about";
var q=url.parse(addr);
console.log(q);
