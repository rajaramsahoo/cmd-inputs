import fs from 'node:fs';
import readlinesync from 'readline-sync';



function addUser(user){
    //raed the file ,get the data from the user,thn push to the aarray thn write the file
    
    fs.readFile('data.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        const isEmailFound = data.find(ele=> ele.email == user.email);
        if(isEmailFound){
             console.log("User already taken that Email ID");
             return;
        }
        data.push(user); 
        

        fs.writeFile('data.json',JSON.stringify(data),(err)=>{
            if(err) throw err;
            console.log("User inserted into the file")
       })
    })
    
}


// addUser()
function displayUser(userEmail){
    fs.readFile('data.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        const isEmailFound = data.find(ele=> ele.email == userEmail);
        if(!isEmailFound){
            console.log("No email found");
            return;
        }
        else {
             console.log(isEmailFound);
             return;
        }
    })
}



function updateUser(userEmail,newAge){
    fs.readFile('data.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        const userIndex = data.findIndex(ele=> ele.email == userEmail);
        if(userIndex == -1){
            console.log("user not found");
            return;
        }
        // console.log(data[userIndex]);
        console.log(data,userIndex)
        data[userIndex].Age = newAge;
       

       fs.writeFile('data.json',JSON.stringify(data),(err)=>{
        if(err) throw err;
        console.log("User new age update sucessfully")
         })
    })
}


function deleteUser(userEmail){
    fs.readFile('data.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
        // const isEmailFound = data.find(ele=> ele.email == userEmail);
    //     if(!isEmailFound){
    //         console.log("No email found");
    //         return;
    //     }
    //    else{
    //        const userIndex = data.findIndex(ele => ele.email == userEmail);
    //        console.log(userIndex);
    //        data.splice(userIndex,1 );
    //        console.log(data);
    //    }
               const userIndex = data.findIndex(ele => ele.email == userEmail);

               if(userIndex == -1){
                console.log("user not found");
                return;
               }
               data.splice(userIndex,1)
       fs.writeFile('data.json',JSON.stringify(data),(err)=>{
        if(err) throw err;
        console.log("User deleted from the file")
         })
    })
}
export {addUser,displayUser,updateUser,deleteUser}