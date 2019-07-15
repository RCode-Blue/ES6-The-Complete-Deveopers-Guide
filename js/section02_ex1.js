// classic js:
/*
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}
*/


// es6:
function handlePosts_es6(){
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];
  
  function showPosts(post){
    console.log("ID: ", post.id);
    console.log("Title: ", post.title);
    console.log("");
  }

  // for (var i = 0; i < posts.length; i++){
  //   console.log(posts[i].id);
  // }

  posts.forEach(showPosts);

}

handlePosts_es6();