var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function area(shape){
  const area = (shape.height * shape.width);
  // console.log(area);
  areas.push(area);
}

images.forEach(area);
console.log(areas);