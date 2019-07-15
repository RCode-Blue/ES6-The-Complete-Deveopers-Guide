var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

var greaterThan50 = numbers.filter(function(number){
  return number > 50;
});

console.log(greaterThan50);
