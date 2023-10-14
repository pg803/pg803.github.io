function fizzbuzz(){
  let answer = parseInt(prompt("Till how many numbers? "));

  for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const factorial = function(n){
  if (n === 0){
    return 1
  }
  let product = 1
  for(let i = n; i > 0, i--;){
     product *= i
  }
  return product
}

const sum = function(array){
  return array.reduce((total, current) => total + current)
}

const product = function(array){
  return array.reduce((total, current) => total * current )
}

const power = function(a, b){
  return Math.pow(a, b);
}