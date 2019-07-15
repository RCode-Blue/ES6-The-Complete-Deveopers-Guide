
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 12445
};

/*
function fileSummary(file){
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}
*/


/*
function fileSummary({ name, extension, size }){
  return `The file ${name}.${extension} is of size ${size}.`;
}

console.log(
  fileSummary(savedFile)
);
*/


function fileSummary({ name, extension, size }, { colour }){
  return `The file ${name}.${extension} is of size ${size} and is ${colour} in colour.`;
}

console.log(
  fileSummary(savedFile, { colour: 'red' })
);