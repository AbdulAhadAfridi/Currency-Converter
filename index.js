#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    RIYAL: 3.75,
    EUR: 0.91,
    INR: 74.57,
    PKR: 280
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "RIYAL", "EUR", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "RIYAL", "EUR", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
