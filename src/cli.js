import readlineSync from 'readline-sync';
let name;
const  user = () => {
    console.log("Welcome to the Brain Games!")
    name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
}
const getGreatestCommonDivisor = (num1, num2) => {
    const smallest = num1 - num2 > 0 ? num2 : num1;
    const arr = [];
    for (let i = 1; i <= smallest; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        arr.push(i);
      }
    }
    return arr[arr.length - 1];
  };

export { name, getGreatestCommonDivisor};
export default user;