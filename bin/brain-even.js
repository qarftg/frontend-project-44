#!/usr/bin/env node
import user from '../src/cli.js'
import getRandomInt from '../src/utilities.js';
import { name } from '../src/cli.js';
import readlineSync from 'readline-sync';
const firstNumber = getRandomInt();
const brainEven = () => {
    user()
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${firstNumber}`)
    let i = ['yes', 'no']
    i = readlineSync.question('your answer:')
    let result = firstNumber % 2 === 0 ? true : false;
    // let correctAnswer = i === result;
    // if (correctAnswer === true) {
    //     correctAnswer = ('yes');
    // }
    // else {
    //     correctAnswer = ('no');
    // }
    if (result && i === ('yes')) {
        console.log('Correct!');
    } else if (!result && i === ('no')) {
        console.log('Correct!');
    } else {
        console.log(`${i} is wrong answer Let's try again, ${name}, Correct answer was ${result ? 'yes' : 'no'}`);
    } 
}

brainEven()
export default brainEven;