// let num =(Math.random()*100)
// let num2 = Math.floor(num)
// console.log(num,num2)

const prompt = require('prompt-sync')();
let a = Math.round(Math.random()*100)
console.log(a)
// let b = prompt("Enter the number:")
// if(a==b){
//     console.log("You guessed the number",a,"correctly")
// }
// else{
//     while()
// }
let chance = 0;
let i = 1
while(i==1){
    let b = prompt("Enter the number: ")
    if(a>b){
        console.log("Number is greater than",b)
    }
    else{
        console.log("Number is smaller than",b)
    }
    chance++;
    if(a==b){
        console.log("You guessed the number",a,"correctly")
        console.log("You took ",chance,"guesses")
        break;
    }
    
}