/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */ //Lines 1-6 is a multiline comment. This is where the author puts his info and the title.

"use strict"; //Use strict is a command so the code can ask questions.
const PROMPT = require('readline-sync'); //Makes the code understand what the user inputs.

let continueResponse; //Let is used to declare variables. lines 11 and 12 are declaring variables
let currentMonth, currentGrade, currentClassroom, upperTuition; //Variables must be put in camel-casing and the commas separate the variables while  the semi-colon ends the line
const MAX_GRADE = 8, //const is a command to declare constants. lines 14- 17 are all declared constants. Constants must be in all caps.
    MAX_MONTH = 9,//separate each one on a new line
    MAX_CLASSROOM = 3, //max amount of classrooms is set to 3
    KDG_TUITION = 80;//The constants cannot change value, while variables can.

function main() { //function is a command that tells the computer to do something
    process.stdout.write('\x1Bc'); //Clears the screen //This will clear the screen. stdout means standard out, which is your monitor
    setContinueResponse();//calls for the first function to be done
    while (continueResponse === 1) {//this is a while loop.
        setCurrentMonth();//lines 24-28 are mutator methods. They are all called in the main.
        setCurrentGrade();//the open and close parentheses and semi- colon finish the line
        setCurrentClassroom(); //
        processPaymentCoupons(); //will run the process listed below
        setContinueResponse();
        for (let i = 0; i < MAX_CLASSROOM; i++) {//for loop under the condition that i is assigned a value of 1.
            //i must be less than MAX_CLASSROOM and each time i will increase by +1.
            printGoodbye();//if condition is met then the print goodbye method will run
        }
    }//brackets are used to close loops or methods.
}

main();//runs function main. it works from top down

function setContinueResponse() { //this is a mutator method. function sets up all of the methods. mush have a bracket and open/close parenthesis
    if (continueResponse != null) { //if loop, The parameter says continueResponse can't equal null
        continueResponse = -1;//continueResponse is assigned a value of -1
        while (continueResponse !== 0 && continueResponse !== 1) { //while loop. if continueResponse meets this condition then it will do what is inside of the brackets.
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //user will be asked to put in a value of 1 or 0
        }
    } else {//if the code doesn't meet whats above, and there are no other options, an else statement is used
        continueResponse = 1;// continueResponse is set equal 1
    }
}

function setCurrentMonth() {//this is a mutator method
    if (currentMonth != null && currentMonth <= MAX_MONTH) {//condition states that currentMonth can't equal null; it has to be less than MAX_MONTH
        currentMonth++;//this is a counter that adds +1 if the the condition is true
    } else {//if the condition is false then it runs this next line
        currentMonth = 1;//sets the current equal to 1
    }
}

function setCurrentGrade() {//this is a mutator method
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) {
        //line 59: if loop. data type cannot equal undefined and must be less than MAX_GRADE
        currentGrade++; //++; will make current grade get added by +1
    } else {//else statement
        currentGrade = 0;//current grade will equal 0
    }
}

function setCurrentClassroom() {//this is a mutator method
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) {
        //line 68: if loop. currentClassroom must be a number and will be less than MAX_CLASSROOM
        currentClassroom++; //currentClassroom is increased by +1
    } else {//else statement. If condition above isn't met then do the next line.
        currentClassroom = 1;//currentClassroom is assigned a value of 0.
    }
}

function setUpperTuition() { //mutator method.
    const BASE_TUITION = 60;//declared constant Base Tuition is equal to 60.
    upperTuition = BASE_TUITION * currentGrade; //upperTuition is equal to 60 multiplied by the CurrentGrade.
}

function processPaymentCoupons() {//worker method
    while (currentGrade <= MAX_GRADE) {//while loop. currentGrade must be less than MAX_GRADE
        while (currentClassroom <= MAX_CLASSROOM) {//while loop. current grade must be less than MAX-CLASSROOM
            while (currentMonth <= MAX_MONTH) {//wile loop. current month must be less than MAX_MONTH
                if (currentGrade == 0) {//if this is a true statement then line 86 will be printed onto the screen
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`);
                } else {//if it meets all of the conditions, except current grade doesn't equal 0, then setUpperTuition
                    setUpperTuition();//program will then setUpperTuition. line 89 will then be printed onto the screen
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`);
                }
                setCurrentMonth();//runs this mutator method
            }
            setCurrentClassroom();//runs this mutator method
            setCurrentMonth();//runs this mutator method
        }
        setCurrentGrade();//runs this mutator method
        setCurrentClassroom();//runs this mutator method
    }
}

function printGoodbye() {//this is a worker method.
    console.log(`\tGoodbye.`); //tells the program to print whatever is inside the parenthesis.
}