// const obj = {
//     harry : 98,
//     sham :99,
//     ram : 100
// }
// for (let a in obj){
//     console.log("the marks of",a,"is",obj[a])
// }
const prompt = require('prompt-sync')()
let a = prompt("Enter the number: ")
let b = 96
while (a!=b){
    console.log("try again")
    a = prompt("Enter the correct number:")
   
}
if(a==b){
    console.log("Your given number is correct")
}