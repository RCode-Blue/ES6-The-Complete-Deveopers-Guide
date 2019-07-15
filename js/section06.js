/*
var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var everyComputer = computers.every(function(computer){
  return computer.ram > 16;
});


var someComputer = computers.some(function(computer){
  return computer.ram > 16;
});

console.log("every: ", everyComputer);
console.log("some:  ", someComputer);
*/


/*
var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

console.log(
  names.every(function(name){
    return name.length > 4;
  })
);

console.log(
  names.some(function(name){
    return name.length > 4;
  })
);
*/

function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
};

var username = new FileReader("2cool");
var password = new FileReader("my_password");
var birthdate = new FileReader("10/10/2010");

var fields = [username, password, birthdate];

var result = fields.every(function(field){
  return field.validate();
});

console.log(result);



