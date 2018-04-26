const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:password123@ds259109.mlab.com:59109/node-todo-api'); //'mongodb://localhost:27017/TodoApp'

module.exports = { mongoose };
