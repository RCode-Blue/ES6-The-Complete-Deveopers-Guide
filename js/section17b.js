// lecture 65

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve();
    reject();
  }, 3000);
});

promise
  .then(() => {
    console.log('Finished');
  })
  .then(() => {
    console.log('Also finished');
  })
  .catch(() => console.log('Opps!'));

console.log(promise);