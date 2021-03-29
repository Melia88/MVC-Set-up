// NOTE The goal of the store is to hold all the data form the entire application. Also holds all of the models based on the data provided.

// The state holds all the date ( _ means THIS IS PRIVATE)

let _state = {
  posts:[]
};


  class Store {
    get State() {
  return _state;
 }
//  prop is the same as key
     commit(prop, data) {
 _state[prop] = data
 }	
}
const store = new Store();
export default store;
