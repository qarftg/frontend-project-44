import readlineSync from 'readline-sync';
const user = () => {
    console.log("Welcome to the brain games")
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}


export default user;