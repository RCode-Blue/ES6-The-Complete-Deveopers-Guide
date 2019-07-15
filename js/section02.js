var colours = ["red", "blue", "green"];

/*
console.log("for loop");
for (var i=0; i<colours.length; i++){
  console.log(colours[i]);
}

console.log("*****");
console.log("forEach");
colours.forEach(element => {
  console.log(element);
});


console.log("-----");
console.log("forEach #2");
colours.forEach(function(colour){
  console.log(colour);
});
*/

var numbers = [1,2,3,4,5];
var sum = 0;

/*
numbers.forEach(function(number){
  sum += number;
  console.log(sum);
});
console.log("---");
console.log(sum);
*/


function adder(number){
  sum+= number;
}
numbers.forEach(adder);

console.log(sum);
