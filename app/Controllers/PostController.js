// NOTE Takes user input and calls to the service the attempt to change data. 

import PostService from "../Services/PostService.js";
import store from "../store.js";

// above the export is whats private

function _draw() {
  let posts = store.State.posts;
  let templates = ''
  posts.forEach(post=>{
    templates += post.Template
  });
  document.getElementById('posts').innerHTML = templates;
}

// below the export is whats public
export default class PostController
{
     constructor(){
  console.log("Building Controller");
      _draw();
   }
  //  below is from the method in the button that was created on HTML page

   createPost(event){
    //  prevent default stops the page from auto reloading on form submit
     event.preventDefault();
    // this grabs the data from the form 
     let formData = event.target;
    //  creates a JavaScript object
     let rawPost = {
       body: formData.body.value
     };
    //  console.log("creating the post")
     PostService.createPost(rawPost);
    //  form reset says go clear that form
     formData.reset();
     _draw();
   }
   delete(id) {
     PostService.delete(id);
     _draw();
   }
}






//  function draw(){
  // //  let collection = _collectableService.Collectables
  //  let template = ''
  //  collection.forEach(collectable => {
      // template += collectable.Template
  //  })
  // //  document.getElementById('collection').innerHTML = template
//  }





