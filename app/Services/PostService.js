// NOTE Gets information/requests from the controller applies all business logic and based on that returns certain data from the store. Its the job of the service to minipulate the DOM.

import Post from "../Models/Post.js";
import Store from "../store.js";


class PostService{
  delete(id) {
    // throw new Error("Method not implemented.");
    let postIndex = Store.State.posts.findIndex(post => post.id == id)
    Store.State.posts.splice(postIndex, 1);
  }
  // constructor(){
    // console.log("Creating Service");
  // }
  createPost(rawData){
    console.log("creating the post from the service");
    let newPost = new Post(rawData)
    let posts = [...Store.State.posts, newPost];
    // this below is the same as the above but it is bad practice so dont do it!
    // Store.State.posts.push(post);
    Store.commit("posts", posts);
  }
}	
// This is called a singleton pattern
const service = new PostService();
export default service;

  // get Collectables(){
    // return _state.Collectables.map(v => new Collectable(v))
  // }

