import rl, { question } from "readline-sync";
class Riddle{
    contructor(id,name,taskDescription,correctAnswer){
        this.id = id,
        this.name=name 
        this.taskDescription =this.taskDescription
        this.correctAnswer=this.correctAnswer
    }
     ask (){
        console.log(this.taskDescription);
        while(answer != this.correctAnswer){
        const answer = rl.question();            // should get a readline.question func
         }
       console.log("congradulation! riddle was solved");     
        }
    }
}
export default Riddle