import { randomBytes } from "crypto";
import fs from "fs";
import random from "random";
import { setTimeout } from "timers/promises";

// // exercise 1

// function delayedGreet(name,delay){
//     const n = name;
//     const d = delay;
// return new Promise((resolve,reject)=>{setTimeout(d,(n)=>console.log("hello "+ name))});
// }

// const dg = delayedGreet("eazy",3000);
// dg.then((value,err)=>{if(err)console.log(err);
//     console.log(value);
// })

// // exercise 2

// function readFileContent(path){

//     let content;
//     return new Promise((resolve,reject)=>{
//     fs.readFile(path,"utf-8",(err,value)=>{
//     if(err)
//         {
//         console.log(`error: ${err}`)
//         reject(err)

//         }
    
//      resolve(value);
//     }
// )
// }
// )
// }


// readFileContent('./async/file1.txt')
// .then(value=>console.log("the content of the file :",value))
// .catch(err => console.log('err',err))


// exercise 3


// function randomOperation(){
//      return new Promise((resolve,reject)=>{
//         const rnd = random.boolean();
//         if(rnd){
//             resolve("success")
//         }
//         reject("failure")
//      })
// }


// randomOperation().then((value)=>console.log(value)).catch(err =>console.log('err:', err));


// exercise 4

function raceTimers(){
    return new Promise((resolve,reject)=>{
        setTimeout(2000,()=>{console.log("timer a finished")});
        
    })
}

raceTimers().then((value)=>console.log(value)).catch((err)=>console.log(err));

