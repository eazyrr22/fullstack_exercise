import rl, { question } from "readline-sync";
import Player from "./classes/player";
import {firstRiddle,secondRiddle} from "Riddle_Game\riddles";


const answer = rl.question("welcome! what's your name?")
const currentPlayer = new Player(answer)
const riddle1 = firstRiddle();

const startRecord = Date.now();
riddle1.ask()




