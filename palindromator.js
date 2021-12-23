//Caleb Haynes 12-23-2021
//Palindrome Checker

"use strict";

//init input/output
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}

//check if input is palindrome
function isPalindrome(word) {
    let reversed = reverseString(word);
    //sanitizes punctuation
    let noPunct = word.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
    let noPunctReversed = reverseString(noPunct);
    //output string
    let decision;

    if (word === reversed){
        decision = ' is a palindrome.';
    } else if (word.toLowerCase() === reversed.toLowerCase()){ 
        decision = ' is a palindrome if we ignore case.';
    } else if (noPunct === noPunctReversed){
        decision = ' is a palindrome if we ignore punctuation.';
    } else if (noPunct.toLowerCase() === noPunctReversed.toLowerCase()){ 
        decision = ' is a palindrome if we ignore case and punctutation.';
    } else {
        decision = ' is not a palindrome.';
    }

    return `Your word "${word}"${decision}`
}

function main(){
    //prompt user input and print outcome
    rl.question("What is your word? ", function(name) {
        console.log(isPalindrome(name));
        rl.close();
    });
};

main();
