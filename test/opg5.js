const fs = require("fs");
const path = require("path");

//aye
const pathToDir = process.argv[2];
const filterPath = "." + process.argv[3];

fs.readdir(pathToDir,(err,data)=>{
    if(err){
        throw new Error("did an ooops");
    }
    var files = data.filter((filename)=>{
        if(path.extname(filename) === filterPath){
            return true;
        }
    })

    /* Alternative solution
    var files = data.filter((filename=>path.extname(filename) === filterPath)
    })*/

    console.log(files.join("\n"));
})