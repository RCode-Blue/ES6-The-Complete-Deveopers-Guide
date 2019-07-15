var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

var filteredNumbers = [];

var lessThan50 = numbers.filter(function(number){
  // if(!(number > 50)){
  return !(number < 50);
  // }
});

console.log(lessThan50);