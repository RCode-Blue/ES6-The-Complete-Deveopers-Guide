/*
// Lecture 51
// generators
function* numbers(){  // or function *numbers(){
  yield;
}

// console.log(numbers());

const gen = numbers();
console.log(gen.next());
gen.next();
console.log(gen.next());
*/



/*
// Lecture 51
// generators
function* shopping(){
  // sidewalk

  // go to store with cash
  const stuffFromStore = yield 'cash';

  // walk back home (sidewalk)
  return stuffFromStore;
}


// store

const gen = shopping();

console.log(gen.next()); // leaving house
console.log(gen.next('groceries')); // leaving store
*/






// Lecture 52
// generators
function* shopping(){
  // sidewalk

  // go to store with cash
  const stuffFromStore = yield 'cash';

  // laundry
  const stuffFromLaundry = yield 'laundry';

  // walk back home (sidewalk)
  return { stuffFromStore, stuffFromLaundry };
}


// store

const gen = shopping();

console.log(gen.next()); // leaving house
console.log(gen.next('groceries')); // leaving store
console.log(gen.next('clean clothes')); // leaving laundry
