
    var fs=require("fs");
    // fs.writeFileSync("fs.txt","Hello");
    // console.log("File created successfully");
   
    fs.writeFile("fs.txt","Hey there",(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("File updated successfully");
        }
    })
    fs.appendFile("fs.txt"," How are you",(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("File appended successfully");
        }
    })