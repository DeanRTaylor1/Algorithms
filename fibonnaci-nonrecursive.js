#!/usr/bin/node

function fibs(num){
    if(num === 0 || num < 1){
        return [0]
    }
    else if(num === 1){
        return [0]
    } else {
        let x = [0, 1]
        a = 0
        b = 1
        let c
        for(let i = 1; i < num - 1; i++){
            c = a + b
            x.push(c)
            a = b
            b = c
        }
        return x
    }
}

console.log(fibs(2))
console.log(fibs(6))
console.log(fibs(10))