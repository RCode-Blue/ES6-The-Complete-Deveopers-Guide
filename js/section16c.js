// lecture 53

function* colours() {
  yield 'red';
  yield 'green';
  yield 'blue';
  yield 'brown';
}

const gen = colours();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const myColours = [];
for (let colour of colours()){
  myColours.push(colour);
  console.log(myColours);
}
