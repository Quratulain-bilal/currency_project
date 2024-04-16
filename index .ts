#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PKR: 277.54,
  IND: 83.3,
  EUR: 0.92,
  NZD: 1.66,
  NPR: 133.08,
  MAD: 10.06,
  EGP: 47.33,
  IRR: 42075.0,
  AFN: 71.23,
  IQD: 1388.06,
};

let userSelection = await inquirer.prompt([
  {
    name: "from",
    message: "select your currency you want to convert",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "IND",
      "EUR",
      "NZD",
      "NPR",
      "MAD",
      "EGP",
      "IRR",
      "AFN",
      "IQD",
    ],
  },
  {
    name: "to",
    message: "select your currency in which you want to convert",
    type: "list",
    choices: [
      "USD",
      "PKR",
      "IND",
      "EUR",
      "NZD",
      "NPR",
      "MAD",
      "EGP",
      "IRR",
      "AFN",
      "IQD",
    ],
  },
  {
    name: "amount",
    message: "how much you want to convert",
    type: "number",
  },
]);

let fromlist = currency[userSelection.from];
let tolist = currency[userSelection.to];
let amount = userSelection.amount;
let baseAmount = amount / fromlist;
let convertedAmount = baseAmount * tolist;

let result = Math.round(convertedAmount);
console.log(result);
