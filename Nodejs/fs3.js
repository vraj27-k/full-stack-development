var fs=require("fs");
d=fs.readFileSync("node/sources.txt/","utf8")
fs.writeFileSync("node/desi.txt", d);
fs.appendFileSync("node/desi.txt", "\nwelcome");
