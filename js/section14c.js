
const companies = [
  'Google',
  'Facebook',
  'Uber',
  'Cisco',
  'Riverbed'
];

const [ name, name2 ] = companies;
const { length } = companies;

// console.log(name, name2);

// console.log(length);


const [ name1, ...rest ] = companies;

console.log(name1);
console.log(rest);