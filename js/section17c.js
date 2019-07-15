// lecture 66

url = "https://jsonplaceholder.typicode.com/posts12345699/";

// let show = 
fetch(url)
  // .then(response => response.json())
  // .then(data => console.log(data));
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error));
  


// console.log(show);