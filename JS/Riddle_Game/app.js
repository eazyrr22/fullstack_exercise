import rl, { question } from "readline-sync";
import Player from "./classes/player.js";
import riddelsArray from "./riddle/arrayOfRiddles.js";
import Round from "./classes/round.js";

const answer = rl.question("welcome! what's your name?")
const currentPlayer = new Player(answer)

for(let rdl of riddelsArray){
    Round(rdl,currentPlayer);
}

const {totalTime,average} = currentPlayer.showStats()
console.log(`great job  ${answer}! \n total time: ${totalTime} seconds \n average time: ${average} seconds`);






