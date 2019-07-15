function validateShoppingList(...items){
  if (items.indexOf('milk') < 0){
    return ['milk', ...items ];
  }

  return items;
}

console.log(
  validateShoppingList('oranges', 'bread')
);