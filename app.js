#!/usr/bin/env node

// Tip Calculator
// Author: Byung Uk An
// Date: 2021-10-31

const reader = require('readline-sync');

let billAmount = 0;
let tipPercentage = 0;
let isValidNumber = false;

// Show what it is.
console.log(`\nThis is a simple tip calculator.\n`);

// Loop for the valid number of a bill amount.
while(!isValidNumber){

  billAmount = reader.question(`Enter Bill Amount: `);
  billAmount = Number(billAmount);
  if(!Number.isNaN(billAmount) && billAmount > 0){
    billAmount = billAmount.toFixed(2);
    isValidNumber = true;
  }else{
    console.log(`\nYou entered a invalid number.\n`);
    isValidNumber = false;
  }
  
}

// Reset for the Tip Percentage
isValidNumber = false;

console.log(`\nYour bill amount is $${billAmount}\n`);

while(!isValidNumber){

  tipPercentage = reader.question(`Enter Tip Percentage(%): `);
  tipPercentage = Number(tipPercentage);
  if(!Number.isNaN(tipPercentage) && tipPercentage > 0){
    tipPercentage = tipPercentage.toFixed(0);
    isValidNumber = true;
  }else{
    console.log(`\nYou entered a invalid number.\n`);
    isValidNumber = false;
  }
  
}

console.log(`\nYour tip percentage is ${tipPercentage}%\n`);

const tip = billAmount * (tipPercentage/100);
const total = Number(billAmount) + tip;


console.log(`========== Result ==========\n`);
console.log(`Your Tip: $${tip.toFixed(2)}\n`);
console.log(`Your Total: $${total}\n`);
console.log(`==========  Done  ==========`);


