let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  
  printReverseList(list);

  collatz = (n) => {
    if(n === 1){
        return 0
    }
    if(n % 2 === 0){
        return collatz(n/2) + 1
        }
    if(n % 2 != 0){
        return collatz(3 * n + 1) + 1
    }
  }

  collatz(27)

  function sumRange(n){
    if(n === 1){
        return 1
    }
    return sumRange(n - 1) + n;
  }

  sumRange(3) // 6

  function power(a, b){
    if(b === 0){
        return 1
    }
    return power(a, (b - 1)) * a
  }

  power(2, 4)

  function fact(n){
    if(n === 0){
        return 1
    }
    if(n === 1){
        return 1
    }
    
    return n * fact(n - 1)
  }

  fact(3)

  function productOfArray(array){
    if(array.length === 0) return 1;

	return array.shift() * productOfArray(array);
  }

  productOfArray([1,2,3])

  var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
// let item = 'data'

// console.log(Object.values(nestedObject).includes(item))

function contains(nestedObject, item){
    if(typeof nestedObject != 'object'){
        return false;
    }
    if(Object.values(nestedObject).includes(item) === true){
        return true
    }
    let newObject = nestedObject[Object.keys(nestedObject)[0]]
    return contains(newObject, item)   
    
}



let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo2"); // false

console.log(hasIt)
console.log(doesntHaveIt)


function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

function sumSquares(array) {
    if(array.length === 0){
        return 0
    }
    let total = 0
    let a = array.shift();

    if(Array.isArray(a)){
        total += sumSquares(a)
    } else if(Number.isInteger(a)) {
		total += a * a;
	}

    return total + sumSquares(array)





}

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 400


function replicate(a, b){
    let x = []
    if(a < 1){
        return x
    }
    if(a === 1){
        return b
    }
    x.push(b,replicate(a-1, b))
    return x.flat(a)
}

console.log(replicate(9, 3))

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

function replicate(times, number){
	if(times <= 0) return [];

	return [number].concat(replicate(times - 1, number));
}
