import readlinesync from 'readline-sync';
import {addUser, displayUser, updateUser, deleteUser} from "./13.js";

const main = ()=>{
    console.clear();
    console.log("********");
    console.log("FS-CLI project");
    console.log("********");
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Add User
    2. Press 2 to Display User
    3. Press 3 to Update User Age
    4. Press 4 to Delete User 
    `)

    let option = readlinesync.questionInt("Enter your options: ");
    let userName, userAge,userEmail
    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
             userName = readlinesync.question("Enter the full name: ");
             userEmail = readlinesync.questionEMail("Enter the Email ID: ");
              userAge = readlinesync.questionInt("Enter the age of ther user: ");
            let user = {
                fName : userName,
                email : userEmail,
                Age : userAge
            }
           addUser(user)
            return;
        case 2:
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");
            displayUser(userEmail)

            return;
        case 3:
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");
            userAge = readlinesync.questionInt("Enter the age of the user: ");
            updateUser(userEmail,userAge)
            return;
        case 4:
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");
            deleteUser(userEmail)
            return;


        default:
            console.log("Invlid option");
            break; 
    }
    let willContinue = readlinesync.question("Do you want to continue? (Y/N): ");

    // Handling all this conditions y, Y, yes, YES, Yes, yEs, yES 
    willContinue = willContinue.toLowerCase()
    if(willContinue == 'yes' || willContinue == 'y'){
        main();
    }
    else {
        console.log("Thank you for using our CLI Application, See you Again!");
        return;
    }
}
main()