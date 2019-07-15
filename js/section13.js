
/*
function addNumbers(numbers){
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(
  addNumbers([1,2,3,4,5])
);
*/



function addNumbers(...numbers){            // ... turns a series of numbers into an array
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

console.log(
  addNumbers(1,2,3,4,5)
);