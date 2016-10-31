/**
 *   @author Taylor, Jacob (taylorj@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 3 code || created: 10.31.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieTitle;
let userRating, averageRating, numRating, totalRating;

function main() {
    process.stdout.write('\x1Bc');
    setContinueResponse();
    while (continueResponse == 1) {
        printIntroduction();
        setMovieTitle();
        setUserRating();
        setNumRating();
        setTotalRating();
        setAverageRating();
        printMovieRating();
    }
}

main();

function printIntroduction() {
    console.log(`\n\tHello, welcome to the Hollywood Movie Rating System.`);
}

function setContinueResponse() {
    if (continueResponse == null) {
        continueResponse = Number(PROMPT.question(`\nWould you like to rate a movie? [0=No, 1=Yes]: `));
    } else if (continueResponse == 0) {
        setAverageRating();
    }
}

function setMovieTitle() {
    movieTitle = PROMPT.question(`\nPlease enter the name of the movie you are rating: `);
}

function setUserRating() {
    let answered = 0;
    let counter = 0;
    const MAX_TRIES = 3;
    const MAX_RATING = 5;

    while (counter < MAX_TRIES && answered != "yes") {
        userRating = Number(PROMPT.question(`\nHow would you rate ${movieTitle} on a scale of 0-5 stars? `));
        if (userRating < 0 || userRating > MAX_RATING) {
            console.log(`\n${userRating} is an incorrect value please try again.`);
            counter++
        } else if (userRating >= 0 && userRating <= MAX_RATING) {
            answered = "yes"
        }
    }
}

function setNumRating() {
    if (numRating >= 1 ) {
        numRating = numRating + 1
    } else if (numRating == null) {
        numRating = 1
    }
}

function setTotalRating() {
    if (totalRating != null) {
        totalRating = totalRating +userRating
    } else {
        totalRating = userRating
    }
}

function setAverageRating() {
    averageRating = Number((totalRating / numRating))
}

function printMovieRating() {
    console.log(`\nThe average rating for ${movieTitle} is: ${averageRating}`);
}
