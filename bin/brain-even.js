import user from '../src/cli.js'
import getRandomInt from '../src/utilities.js';

const firstNumber = getRandomInt();
const brainEven = () => {
    user()
    console.log('answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${firstNumber}`)
}
brainEven()
export default brainEven;