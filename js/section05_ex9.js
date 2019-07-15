var users = [
  { id: 1, name: 'John', admin: false },
  { id: 2, name: 'Jack', admin: false },
  { id: 3, name: 'Jill', admin: true },
  { id: 4, name: 'Josephine', admin: true }
];

var admin;

admin = users.find(function(user){
  return user.admin === true;
});

console.log(admin);
