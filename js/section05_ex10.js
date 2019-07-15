var accounts = [
  { name: 'Barry', balance: -10 },
  { name: 'Billy', balance: 12 },
  { name: 'Bobby', balance: 0 }
];

var account;

account = accounts.find(function(account){
  return account.balance === 12;
});

console.log(account);