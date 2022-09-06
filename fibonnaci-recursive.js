#!/usr/bin/node

function fibs(num){
   
    if(num === 0){
        return [0]
    } 
    if(num === 1) {
        return [0,1]
    }
    let x = fibs(num-1)

    return [...x, x[num-1] + x[num - 2]]
}

console.log(fibs(4))
console.log(fibs(6))
console.log(fibs(10))

// let x = []
// let a = x.concat(1, 2)
// let c = x.concat(a)
// console.log(c)


// console.log(fibs(4))
// console.log(fibs(6))
// console.log(fibs(10))