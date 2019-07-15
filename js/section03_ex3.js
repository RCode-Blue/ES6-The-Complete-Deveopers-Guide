var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

// function getHeight(shape){
//   return shape.height;
// }

// heights = images.map(getHeight);

heights = images.map(function(shape){
  return shape.height;
});

console.log(heights);