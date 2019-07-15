
var paints = [
  {
    colour: 'red',
    volume: 500,
    price: 20,
    availability: true
  },
  {
    colour: 'blue',
    volume: 750,
    price: 32,
    availability: false
  },
  {
    colour: 'green',
    volume: 2000,
    price: 42.80,
    availability: true
  },
  {
    colour: 'purple',
    volume: 500,
    price: 25,
    availability: true
  }
];




function pluck(arr, ppty) {
  // console.log(prop);
  // console.log(ppty);
  var elementProps = [];

  elementProps =  arr.map(function(element){
    // console.log(ppty);
    // console.log(element[ppty]);
    return(element[ppty]);
  });
  return elementProps;
}

// pluck(paints, "colour");

var newArr = pluck(paints, "price");
console.log(newArr);