console.log("-add---")
const add = function(a,b){
  return a+b;
};
console.log(add(1,2));



console.log("-addArrow---")
const addArrow = (a,b) => {
  return a + b;
};
console.log(addArrow(3,4));



console.log("-addArrow2---")
const addArrow2 = (a,b) => a + b;
console.log(addArrow2(5,6));



console.log("-double---")
const double = function(number){
  return 2 * number;
};
console.log(double(5));



console.log("-doubleArrow---");
const doubleArrow = (number) => {
  return 2 * number;
};
console.log(doubleArrow(3));



console.log("-doubleArrow2---");
const doubleArrow2 = number => 2 * number;  //single argument
console.log(doubleArrow2(9));



console.log("-doubleArrow3---");
const doubleArrow3 = () => {
  return "Hi, I'm a Fat Arrow";
};
console.log(doubleArrow3());



console.log("-doubleArrow4---");
const doubleArrow4 = ( number => 2 * number );
console.log(doubleArrow4(55));



console.log("-array1---");
const numbersArray1 = [1,2,3];

let numbersArray1Result = numbersArray1.map(function(number) {
  return 2 * number;
});
console.log(numbersArray1Result);



console.log("-array2---");
const numbersArray2= [3,4,5];

let numbersArray2Result = numbersArray2.map(number => 2 * number);

console.log(numbersArray2Result);

