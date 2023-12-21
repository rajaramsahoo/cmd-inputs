//promises
import fs from "node:fs/promises";
//a           sync has no error handling cases so we use the commnon error handling cases are try&await
//========
// async function getresult(){
//     try{
//         let output = await callpromises(22);
//         console.log(output);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getresult();
//==========
//to avoid call back hell so use the promises 
//for consume the promises it have two methods 
//1=.then and .catch
//2=async and await//here we creat async fun
//async await key world is must,
//=======================
async function main(){
    
    try{
       let data = await fs.readFile("promise.txt");
       data = String(data);
       data += " try block in resolve state"
       await fs.writeFile("promise.txt",String(data));
       console.log("write to file system");

    }
    catch(err){
        console.log("something went wrong")
        console.log(err);

    }



}
main()
// blocking a sync code 
// when we use callback method it was not blocking the code
