
// exercise 1 
function doubleValues(arr){
    
   const doubleArr = (arr.map((item)=> item*2).filter(item => item));
    return doubleArr;
}
const arr = [1,2,3,4,5,6,7];
console.log(doubleValues(arr));



// exercise 2
function onlyEvenValues(arr){
    const evenArr = arr.filter(item=>item %2==0);
       return evenArr;
}

// exercise 3
 function showFirstAndLast(arr){
    let FAndLArr = arr.filter(item => typeof item === "string" )
    return FAndLArr;
}
let a = [2,"5",9,"h"]
console.log(showFirstAndLast(a))

// exercise 4
 function vowelCount(str){
    const vowels = {'a':0,'o':0,'e':0,'u':0,'i':0};
    const tempArr = str.split("").map((item) =>{for(let key in vowels){
                                                if(key == item.toUpperCase()|| key == item.toLowerCase()){
                                                 vowels[key] +=1;
                                                }
                                            }
                                        }
                                    )     
                                
    return vowels;                                                 
   }
   
//  a = "helloooo";
//  console.log(vowelCount(a));
 
//exercise 5

function capitalize(str){
    let splitStr = str.split(" ")
    return splitStr.map(item=> item[0].toUpperCase().concat(item.substring(1))).join(" ")
    
}
console.log(capitalize("hi there"));
