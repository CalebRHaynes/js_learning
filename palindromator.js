//Caleb Haynes 12-23-2021

//Palindrome Checker
"use strict";

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseString(str) {
    return str.split("").reverse().join("");
}

function isPalindrome(word) {
    let reversed = reverseString(word);
    let decision;

    if (word === reversed){
        decision = ' is a palindrome.';
    } else if(word.toLowerCase() === reversed.toLowerCase()){ 
        decision = ' is a palindrome if we ignore case.';
    } else {
        decision = ' not ';
    }

    console.log('Your word "' + word + '"' + decision);
    return
}

function main(){
    
    rl.question("What is your word? ", function(name) {
        isPalindrome(name)
        rl.close();
    });
};

main();
