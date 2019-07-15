
const defaultColours = [ 'red', 'green' ];
const userFavouriteColours = [ 'orange', 'yellow' ];
const autumnColours = [ 'fire red', 'fall orange' ];

//defaultColours.concat(userFavouriteColours);

[ ...defaultColours, ...userFavouriteColours];

console.log([ ...defaultColours, ...userFavouriteColours]);

console.log([ ...defaultColours, userFavouriteColours ]);

console.log([ ...defaultColours, userFavouriteColours, ...autumnColours ]);

console.log([ 'blue', ...defaultColours, userFavouriteColours, ...autumnColours ]);