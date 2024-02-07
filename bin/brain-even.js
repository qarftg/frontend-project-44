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
    if (i === 'yes') {
        i = 0
    }
    if (i === 'no') {
        i = 1
    }
    if (i === firstNumber % 2) {
        console.log('Correct!');
    }else{
        console.log(`${i} is wrong answer Let's try again, ${name}`);
    }
}

brainEven()
export default brainEven;