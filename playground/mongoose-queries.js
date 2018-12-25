const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/User');




// const id = '5c1d3ba7405deb0982d23ed3';

// if(!ObjectID.isValid(id)) {
//   console.log("id is not valid");
// }
// else{

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos", todos)
// });


// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo", todo)
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log("Id not found");
//   }
//   console.log("Todo by id", todo)
// }).catch(err => {
//   console.log("error", err);
// })

// }


const userId = '5c1be0f45b02b40785e15fbb';


User.findById('5c1be0f45b02b40785e15fbb').then((user) => {
  if(!user) {
    return console.log('Unable to find user');
  }
  console.log('User', user);
}).catch( err => {
  console.log('error', err)
})