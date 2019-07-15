/*
function createBookShop(inventory){
  return{
    inventory: inventory,
    inventoryValue: function(){
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}
*/

/*
function createBookShop(inventory){
  return{
    // inventory: inventory,
    inventory,

    // inventoryValue: function(){
    inventoryValue(){
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },

    // priceForTitle: function(title){
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}
*/


function createBookShop(inventory){
  return{
    inventory,
    inventoryValue(){
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}




const inventory = [
  { title: 'A Song of Ice and Fire', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(
  //bookShop.inventoryValue()
  bookShop.priceForTitle('A Song of Ice and Fire')
);