#!/usr/bin/node

function mergeSort(array){
    if(array.length < 2){         
         return array         
    }
    const half = Math.ceil(array.length / 2)
    let left = array.slice(0, half)
    let right = array.slice(half)  
   return merge(mergeSort(left), mergeSort(right))  
}

function merge(left, right){
    let arr = []
    while(left.length && right.length){
        if(left[0] < right[0]) {
            arr.push(left.shift())
        } else{
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

const list = [5, 2, 3, 4, 1, 6]
console.log(mergeSort(list))

