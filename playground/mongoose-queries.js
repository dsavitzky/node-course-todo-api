const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');
const { User } = require('./../server/models/user');

// const id = '5ae1597d26b059993c13595411';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

const id = '5ae136e25650708f08aa177a';

if (!ObjectID.isValid(id)) {
   return console.log('ID not valid');
}

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User id', user);
}).catch((e) => console.log(e));
