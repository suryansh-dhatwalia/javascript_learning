// Q1:
// const prompt = require('prompt-sync')();
// let a = []
// let i = 1
// while(i==1){
//     let c = prompt("Enter the number: ")
   
//     if (c=="done"){
//         break
//     }
//     c = Number.parseInt(c)
//     a.push(c)
    
// }
// console.log(a)



//Q3: filter a number from a array divisble by 10

// let a = [1,2,3,4,10,20,44,50]
// let b = a.filter((c)=>{
//     return (c%10 != 0)
// })
// console.log(b,a)




// Q4 : CREATE A ARRAY OF SQUARES OF ARRAY NUMBERS
// let a = [1,2,3,4,10,20,44,50]
// let b = a.map((c)=>{
//     return(c*c)
// })
// console.log(b)

//Q5
let n = [1,2,3,4,5,6]
let b = n.reduce((a,m)=>{
    return a*m
})
console.log(b)