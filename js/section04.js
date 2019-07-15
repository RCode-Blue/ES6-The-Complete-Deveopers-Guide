var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'pineapple', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'grape', type: 'fruit', quantity: 3, price: 12 },
  { name: 'tomato', type: 'fruit', quantity: 22, price: 99 }
];

/*
var filteredProducts = [];

for (var i=0; i < products.length; i++){
  if (products[i].type === 'fruit'){
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);
*/

/*
var filteredPdts = products.filter(function(product){
  return product.type === 'fruit';
  // return product.name === 'grape';
});

console.log(filteredPdts);
*/

/*
var productSelection = products.filter(function(product){
  return product.type === 'vegetable' 
    && product.quantity > 0
    && product.price < 20;
});

console.log(productSelection);
*/



var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];


function commentsForPost(post, comments){
  return comments.filter(function(comment){
    return comment.postId === post.id;
  });
}

console.log(commentsForPost(post, comments));