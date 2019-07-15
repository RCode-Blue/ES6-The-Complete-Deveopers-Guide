class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

/*
class Toyota{
  constructor({ colour }){
    this.colour = 'red';
  }
  honk() {
    return 'beep';
  }
}
*/

class Toyota extends Car{
  constructor(options){
    super(options);
    this.colour = options.colour;
  }
  honk() {
    //super();
    return 'beep';
  }
}

const toyota = new Toyota({ colour: 'red', title: "Daily driver" });


console.log(toyota);
console.log(toyota.honk());
console.log(toyota.drive());
