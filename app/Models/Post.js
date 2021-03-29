// NOTE An object that holds all the information for the data per object.

// NOTE this is the framework for Post.js
// 

export default class Post {
  // this is the data pf the post
  constructor(data) {
    this.id = data.id || generateId();
    this.body = data.body;
    this.date = data.date || new Date().toLocaleDateString("en-Us");
  }
  // this is the string & info on how to render that post in the HTML
  get Template(){
    return `
    <div class="post">
    <h4>${this.date}</h4>
    <p>
    ${this.body}
    </p>
    <button onclick="app.postController.delete(${this.id})">Delete</button>
    </div>
    `;
  } 
}

function generateId(){
  return Math.floor(Math.random()*10000);
}

//  export default class Collectable {
  // constructor(image, title, description, rarity) {
    // this.image = image
    // this.title = title
    // this.description = description
    // this.rarity = rarity
  // }
// }



// get Template(){
  // return `
  // <div class="col-3">
    // <div class="card">
      // // <img class="card-img-top" src="${this.image}" alt="Card image cap">
      // <div class="card-body">
          // <i class="far fa-trash-alt delete"></i>
          // // <h4 class="card-title">${this.title}</h4>
          // // <p class="card-text">${this.description}</p>
          // <p class="card-text">${this.rarity}</p>
      // </div>
    // </div>
  // </div>
  // `
// }
  


