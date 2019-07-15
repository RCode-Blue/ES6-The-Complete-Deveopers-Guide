
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6

/*
const { type } = expense;    // declares a vriable names type and references expenses.type
const { amount } = expense;  // not an object
*/

const { type, amount } = expense; // same as above


console.log (type);
console.log (amount);




