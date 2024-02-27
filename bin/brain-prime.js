#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../src/cli.js';
import getRandomInt from '../src/utilities.js';

const name = user();
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
console.log(rule);

let r;
let counter = 0;
const isPrime = (num) => {
  for (let a = 2; a < num; a += 1) {
    if (num % a === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const getPrimeGame = () => {
  const j = [];
  const num1 = getRandomInt();
  // eslint-disable-next-line eqeqeq
  if (num1 != 1) {
    j.push(num1);
  } else {
    j.push(getRandomInt());
  }
  const correctAnswer = isPrime(num1);
  console.log(`Question: ${num1}`);
  r = readlineSync.question('Your answer: ');
  if (r === correctAnswer) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${r}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    return;
  }
  if (counter > 0 && counter < 3) {
    getPrimeGame();
  }
};
getPrimeGame();
if (counter === 3) {
  console.log(`Congratulations, ${name}!`);
}
export default getPrimeGame;
