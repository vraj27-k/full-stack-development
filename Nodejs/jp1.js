var fs=require("fs");
const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ] 

fs.writeFileSync("shape.txt",JSON.stringify(shape))

var sp=(shape[1].side)*4;
var cp=(shape[0].diameter/2)*3.14*2;
fs.appendFileSync("shape.txt","\n Perimeter of square is "+sp+"\n Perimeter of circle is "+cp);
console.log(sp+" PERIMETER "+cp)