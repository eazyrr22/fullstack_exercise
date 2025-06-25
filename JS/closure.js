// exercise 1
function createCounter(){
    let i =0;
    return () => i++;
}
 let counter = createCounter()
//  console.log(counter())
//  console.log(counter())


 //exercise 2
 function secretHolder(secret){
    const functions = {getSecret:()=>secret,setSecret:(newSecret)=>secret=newSecret}
    return   functions;
}


const {getSecret,setSecret} = secretHolder("abc");
console.log(getSecret())

// exrcise 3
function buildFunctions() {
const arr = [];
for (let i=0;i< 3; i++) {
arr.push(function () {
console.log(i);
});
}
return arr;
}

const funcs = buildFunctions();
funcs[0](); // should print 0
funcs[1](); // should print 1
funcs[2](); // should print 2