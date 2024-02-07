import readlineSync from 'readline-sync';
let name;
const user = () => {
    console.log("Welcome to the brain games")
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}
export {name}
export default user;