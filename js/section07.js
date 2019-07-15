var numbers = [ 10, 20, 30 ];
var sum = 0;

/*
for (var i=0; i < numbers.length; i++){
  sum += numbers[i];
}
*/

/*
var tots = numbers.reduce(function(sum, number){
  return sum + number;
}, 0);

console.log(tots);
*/


var primaryColours = [
  { colour: 'red' },
  { colour: 'yellow' },
  { colour: 'blue' }
];

var reducedColours = primaryColours.reduce(function(acc, primaryColour) {
  acc.push(primaryColour.colour);
  // acc ("accumulator") is an abitrarily named variable that serves as the initial value and 
  // also the accumulated value
  return acc;
}, []);

console.log(reducedColours);