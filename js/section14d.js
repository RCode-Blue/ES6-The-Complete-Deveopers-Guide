
const companies = [
  { name: 'Google', place: 'Mountain View'},
  { name: 'Facebook', place: 'Menlo Park'},
  { name: 'Uber', place: 'San Francisco'},
  { name: 'Cisco', place: 'San Jose'},
  { name: 'Riverbed', place: 'San Francisco'},
  { name: 'F5 Networks', place: 'Seattle'}
];

/*
var loc = companies[0].place;
console.log(loc);
*/

/*
const [{place}] = companies;
console.log(place);
*/

const GoogleLocations = {
  places: ['Mountain View', 'New York', 'London']
};

// const { places } = GoogleLocations;
// console.log(places);

const { places: [places] } = GoogleLocations;
console.log(places);