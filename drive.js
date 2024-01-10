const prompt = require('prompt-sync')()
let age = prompt("what is your age:")
console.log("You can", age<18?  "not drive": "drive")
console.log ("you are", age>18? "you are a youngster":"you are teenager")