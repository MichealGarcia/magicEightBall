// build a magic 8 ball
// the user will ask a question and our program will output a fortune

// Enter your name here
const userName = ""
// You can shake an eightball without a question.
let userQuestion = ""
// generate a number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ""

// Debug
// console.log(randomNumber)

// Conditional for initial greeting
if (userName === "") {
    console.log("Hello!");
    console.log(`Your question: ${userQuestion}`);
} else {
    console.log(`Hello, ${userName}!`);
    console.log(`Your question: ${userQuestion}`);
}


// A seithc statement evaluates an expression to a case
// then executes statements in the case. 
// note** All cases following the chosen
// case will execute if there is no break from
// the switch statement.
// note** there are othertimes when you can add 
// default after each case, also called the fall-through technique.
switch (randomNumber) {
    case 0:
        eightBall = 'It is Certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict no';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = ""
}

// Used a conditional statement to debug the program if randomNumber breaks.
if (eightBall === "") {
    console.log("The eightball is broken")
} else {
    console.log(`The Eight Ball exclaims: ${eightBall}!`)
}
