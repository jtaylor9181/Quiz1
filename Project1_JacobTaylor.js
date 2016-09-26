/**
 * @author Taylor, Jacob (taylorj@student.ncmich.edu)
 *   @version 0.0.3
 *   @summary Project 1 code || created: 09.26.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomCount, bathroomCount, garageSize, homePrice;

const BASE_PRICE = 50000;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_PRICE = 6000;

function main() {
    setLotNumber();
    setBedroomCount();
    setBathroomCount();
    setGarageSize();
    calculateHomePrice();
    printResults();
    }

main();

function setLotNumber() {
    lotNumber = PROMPT.question (`\nPlease enter lot number you would like: `);
    }

function setBedroomCount() {
    bedroomCount = Number (PROMPT.question (`\nPlease enter the number of bedrooms you would like: `));
    }

function setBathroomCount() {
    bathroomCount = Number(PROMPT.question(`\nPlease enter the number of bathrooms you would like: `));
    }

function setGarageSize() {
    garageSize = Number(PROMPT.question (`\nPlease enter the number of cars that will be in your garage: `));
}

function calculateHomePrice() {
    homePrice = BASE_PRICE + BEDROOM_PRICE * bedroomCount + BATHROOM_PRICE * bathroomCount + GARAGE_PRICE * garageSize
    }

function printResults() {
    console.log("\nThe total cost of the home will be \$" + homePrice);
}