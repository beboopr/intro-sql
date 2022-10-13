/*
create a program that guesses a number from 1 to 10 then ask us to guess that number.
then it ask us to guess that number. 
if its higher say "Too high and ask again.
if its too low and ask again
if its the right number say " Congratulations" and exit
*/

import readline from "readline-sync"

let userGuessedRight = false

// guess a number from 1-10
let NumberChosen = Math.ceil(Math.random() * 10)
//console.log(NumberChosen)
//let guess = ""
while (!userGuessedRight) {
    let guess = readline.question("what is your guess?")
    if (guess == NumberChosen) // is it equal
    {
        console.log("congratulations")
        userGuessedRight = true // get out
    }
    if (guess > NumberChosen) {
        console.log("too high try again")

    }
    if (guess < NumberChosen) {
        console.log("too low try again")

    }
}
