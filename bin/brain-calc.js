#!/usr/bin/env node
import user from "../src/cli.js";
import getRandomInt from "../src/utilities.js";
import readlineSync from "readline-sync"
import { name } from '../src/cli.js';
user()
let r;
const calc = () => {
    const opers = ['*', '/', '+', '-'];
    const ranop = getRandomInt(opers.length)
    let num1 = getRandomInt()
    let num2 = getRandomInt()
    let result = undefined;
    switch (ranop) {
        case 0:
            console.log(`${num1} * ${num2}`);
            result = num1 * num2
            break
        case 1:
            console.log(`${num1} / ${num2}`);
            result = num1 / num2
            break
        case 2:
            console.log(`${num1} + ${num2}`);
            result = num1 + num2
            break
        case 3:
            console.log(`${num1} - ${num2}`);
            result = num1 - num2
            break
    }
    console.log('What is the result of the expression?');
    r = readlineSync.question('answer: ')
    if (+r === result ) {
        console.log('correct');
    } else {
        console.log(`${r} is wrong answer, Let's try again, ${name}`);
    }
    console.log(`correct answer: ${result}`);
}
calc()
export default calc; 