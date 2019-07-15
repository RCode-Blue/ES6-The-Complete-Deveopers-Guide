/*
function makeAjaxRequest(url, method){
  if(!method){
    method = 'GET';
  }

  // logic to make request
}
*/

function makeAjaxRequest(url, method = 'GET'){
  return method;
  // logic to make request
}


console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', null));
console.log(makeAjaxRequest('google.com', 'GET'));
console.log(makeAjaxRequest('google.com', 'POST'));
