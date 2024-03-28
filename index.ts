#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; // Dollar
let myPincode = 555;

let pinAnswer = await inquirer.prompt(
    [
       {
      name : "pin",
        message : "Enter your pin", 
        type : "number",
       },
  ]
);
if (pinAnswer .pin === myPincode) 
    console.log("valid pin code... ");
    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "please select option",
                type : "list",
                choices : ["withdrawl","check Balance","fast cash"],
            }
        ]
    );
    if (operationAns.operation === "withdrawl") {
     let amountAns = await inquirer.prompt(
       [
           {
             name : "amount",
             message : "Enter your amount to withdrawl",
             type : "number",       
                },
         ]
     );
     if (amountAns.amount < myBalance){

     myBalance -= amountAns.amount;
    console.log(`your remaining balance is : ${ myBalance}`);
    } } else {
        console.log("insufficient balance");
    }
     if (operationAns.operation === "check balanced"){
        console.log(`yourbalanced is:  ${ myBalance}`);
     } else if (operationAns.operation === "fast cash"){
        let fastcash = await inquirer.prompt([
            {
                name : "fast_cash",
                message : "How much money you want to withdrawl",
                type : "list",
                choices : ["3000","6000","10000"],
            },
        ]);
        if (fastcash.fast_cash === "3000"){
            myBalance -= fastcash.fast_cash;
            console.log(`your remaining balance is : ${myBalance}`); 
        } 
        if (fastcash.fast_cash === "6000"){
            myBalance -= fastcash.fast_cash;
            console.log(`your remaining balance is : ${myBalance}`);
        } if (fastcash.fast_cash === "10000"){
        myBalance -= fastcash.fast_cash;
        console.log(`your remaining balance is : ${myBalance}`);
    
     } 
     else {
    console.log("Invalid pin code!!! "); }
}
    