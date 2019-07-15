console.log("ex35");

class Monster {
  constructor (options){
    this.health = 100;
    this.name = options.name;
  }

}

//const myMonster = new Monster({ health: 100, name: 'Johnny' });

//console.log(myMonster);


class Snake extends Monster{
  constructor(options){
    super(options);
    this.length = options.length;
  }

  hiss(){
    return 'Sssss...';
  }
}

const newSnake = new Snake({ length: 100, name: 'Nagini'});
console.log(newSnake);