// lecture 61

//                ----------> Status: 'resolved' -------> Callback: then
//              /
//  Promise ---<
//              \
//                ----------> Status: 'rejected' -------> Callback: catch


promise = new Promise((resolve, reject) => {
  // resolve();
  reject();
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