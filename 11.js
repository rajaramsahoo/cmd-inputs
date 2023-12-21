import fs from "node:fs";
import  readlineSync from "readline-sync"
const main = () => {
    console.clear();

    console.log("********************************************")
    console.log("\t\tFS-PROJ CLI\t\t");
    console.log("********************************************")

    //Print Menu
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Add User
    2. Press 2 to Display User
    3. Press 3 to Update User Age
    4. Press 4 to Delete User 
    `)

    let option = readlineSync.questionInt("Enter your options: ");

    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;

        case 1:
        let userName = readlineSync.question("Enter your fullname: ");
        let userEmail = readlineSync.questionEMail("Enter your email: ");
        let userAge = readlineSync.questionInt("Enter your Age: ");

        let user = {
            fullName: userName,
            email: userEmail,
            age: userAge
        }

       return;

        case 2:
            //take email input from user
        return

        case 3:
            //take email input and newAge from user
        return

        case 4:
            //take email input from user
        return

        default:
            console.log("Invalid Option")
            break;
    }

    let willContinue = readlineSync.question("Do you want to continue? (Y/N): ");

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
main();
