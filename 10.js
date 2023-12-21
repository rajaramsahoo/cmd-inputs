import fs from 'node:fs';
/*
[{
    fullName:"elon",
    email: elon@spacex.com,
    age:55
}]
*/


//CRUD: Create, Read, Update and Delete

function addUser(user){
    //read the file, get the input from user, then push into array, then write to the file
    fs.readFile('data.json',(err, data)=>{
        if(err) throw err

        data = JSON.parse(data);

        //check for duplicate email
        const isEmailFound = data.find(ele => ele.email == user.email );
        if(isEmailFound){
            console.log('User already registered! ');
            return;
        }

        data.push(user);

        fs.writeFile('data.json', JSON.stringify(data), (err)=>{
            if(err) throw err;
            console.log("User inserted into file! ");
        })
    })
}

function displayUser(email){

    //read the file
    //check weather that email exist
    // if exist print the age and name
    //if not print "no email found"

}

function updateUser(email, newAge){

    
    //read the file
    //check weather that email exist
    //if exist update the record (update the age of that email)
    //if the user doesn't exist "no email found"

}

function deleteUser(email){

    //read the file
    //check weather that email exist
    //if exist delete the user (removing from the array)
    //if the user doesn't exist "no email found"

}

export {addUser}