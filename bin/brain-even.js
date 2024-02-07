import user from '../src/cli.js'
import getRandomInt from '../src/utilities.js';
import { name } from '../src/cli.js';
import readlineSync from 'readline-sync';
const firstNumber = getRandomInt();
const brainEven = () => {
    user()
    console.log('answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${firstNumber}`)
    let i = ['yes', 'no']
    i = readlineSync.question('your answer:')
    let correctAnswer = i === firstNumber % 2
    if (correctAnswer === true) {
        correctAnswer = ('yes');
    }
    else {
        correctAnswer = ('no');
    }
    if (i === firstNumber % 2) {
        console.log('Correct!');
    } else {
        console.log(`${i} is wrong answer Let's try again, ${name}`);
    }
}

brainEven()
export default brainEven;