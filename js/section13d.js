/*
const MathLibrary = {
  calculateProduct(a,b) {
    return a * b;
  },

  multiply(a,b) {
    return a * b;
  },
};
*/

const MathLibrary = {
  calculateProduct(...numbers) {
    console.log('Please use the multiply method instead');
    return this.multiply(...numbers);
  },

  multiply(a,b) {
    return a * b;
  },
};


