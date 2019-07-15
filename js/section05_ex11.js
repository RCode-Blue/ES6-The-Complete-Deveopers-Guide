var ladders = [
  { id: 1, height: 20 },
  { id: 2, height: 25 },
  { id: 3, height: 30 },
  { id: 4, height: 35 }
];


function findWhere(array, criteria){
  var ppty = (Object.keys(criteria)[0]);
  // console.log(criteria.height);

  // return (array.height) === criteria.height;
  // return array['height'] === criteria.height;

  // var myProperty = Object.keys(criteria)[0];
  // console.log(myProperty);

  // console.log(Object.keys(criteria)[0]);
  // console.log(criteria.height);

  array.find(function(element){
    return element[ppty] === criteria.height;
  });

}


var myLadder = findWhere(ladders, { height: 25});
// var myLadder = findWhere(ladders, { height: 25});
console.log(myLadder);


/*
var myLadder = ladders.find(function(ladder){
  return ladder.height === 20;
});

console.log(myLadder);
*/


