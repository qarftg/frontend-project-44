import {user} from '../src/cli.js'
const brainEven = (priv) => {
    console.log("Welcome to the Brain Games!")
    user()
    console.log('"yes" if the number is even, otherwise answer "no"')
}
const barbariska = (sf) => {
    return Math.floor(Math.random() * sf)

}
brainEven()
export {brainEven, barbariska}