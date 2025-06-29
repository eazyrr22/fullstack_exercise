import Riddle from "../classes/riddels";

const id = 2;
const name = "divide"
const taskDescription = "what is 25/5?"
const correctAnswer = 5

const secondRiddle = new Riddle(id,name,taskDescription,correctAnswer);
console.log(secondRiddle())
 
export default secondRiddle;