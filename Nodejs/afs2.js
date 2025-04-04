var fs = require('fs');
fs.readFile("fs.txt","utf8",(err, data) => {
    if(err)
    {
        console.log("Error: ", err);
    }
    else{
        console.log("Content: ", data);
    }
});
fs.rename("fs.txt","fs1.txt",()=>{
    console.log("File renamed successfully");
})

fs.unlink("fs1.txt",(err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("File deleted successfully");
    }
})

