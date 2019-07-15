function Car(options){
  this.title = options.title;
}

Car.prototype.drive = function(){
  return 'vroom';
};

/*
function Toyota(options){
  this.colour = options.colour;
}
*/

function Toyota(options){
  Car.call(this, options);
  this.colour = options.colour;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.honk = function(){
  return 'beep';
};


// const car = new Car({ title: 'Focus' });
// console.log(car.drive());

const toyota = new Toyota( { colour: 'red', title: 'Daily Driver '});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());