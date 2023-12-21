import fs from "fs/promises";
async function addUser(user){
    try{
       let data = await fs.readFile("fspromise.json");
       data=JSON.parse(data);
       const isEmailFound = data.find(ele=>ele.email==user.email)
       if(isEmailFound){
        console.log("The email ID already taken");
       return;
       }
       data.push(user);
       await fs.writeFile("fspromise.json",JSON.stringify(data));
       console.log("user inserted into the file")
    }
    catch(err){
        console.log(err);
    }
}
async function displayUser(){

}
async function updateUser(){

}
async function deleteUser(){


}
export {addUser, displayUser,updateUser,deleteUser}