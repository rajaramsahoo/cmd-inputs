import fs from "node:fs";
function writeToAFile(){
    let data=[1,2,3,4,5];
    fs.writeFile('sample.txt',data,(err)=>{
        if(err) throw err;
        console.log("Data has been written to the file sucessfully")
    })
}
// writeToAFile();
function readFromFile(){
    fs.readFile('sample.txt',(err,data)=>{
        if(err) throw err;

        data=String(data);
        console.log(data)
    })
}
readFromFile()