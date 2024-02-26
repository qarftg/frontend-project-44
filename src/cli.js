import readlineSync from 'readline-sync';
let name;
const user = () => {
    console.log("Welcome to the Brain Games!")
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}
const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

export { name, getRandomInt}
export default user;