
// destructuring argument aobjects
/*
function signup(username, password, email, dob, city){
  // create new user
}

const user = {
  username: 'myname',
  password: 'mypwd',
  email: 'me@me.test',
  dob: '1/2/1990',
  city: 'Atlanta'
};

signup(user);
*/

// destructuring arrays

const points = [
  [4,5],
  [10,1],
  [1,40]
];

// want this format:
// [
//   { x: 4, y: 5 },
//   { x: 77, y: 33 },
//   { x: 92, y: 0 }
// ];

points.map(pair => {
  const [x,y] = pair;
});


points.map(([x,y]) => {
  // return { x: x, y: y };
  return { x, y };
});