function saveFile() {
  // $.ajax({ method: 'POST', url: url, data: data });
  $.ajax({ method: 'POST', url, data });
}

const url = "http://fileupload.com";
const data = { colour: 'red' };

saveFile(url, data);