/**
 * @author Taylor, Jacob (taylorj@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 2 demo code || created: 09.19.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let numShoes;
let lastName;
const LANGUAGE = 'English';

function main() {
    setNumShoes();
    setLastName();
    printNumShoes();
    printLastName();
}

main();

function setNumShoes() {
    numShoes = PROMPT.question(`\nHow many shoes would you like?: `);
}

function setLastName() {
    lastName = PROMPT.question(`\nEnter last name: `);
}

function printNumShoes() {
    console.log(`You ordered ${numShoes} pairs of shoes`);
}

function printLastName() {
    console.log(`Your last name is ${lastName}`);
}