import readlineSync from 'readline-sync';
import { barbariska } from '../bin/brain-even.js';
const user = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}
 const num = () => {
const number = readlineSync.question(barbariska)
}
num()
export {user, num}