const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbUrl = process.env.PORT ? 'mongodb://admin:password123@ds259109.mlab.com:59109/node-todo-api' : 'mongodb://localhost:27017/TodoApp';

mongoose.connect(dbUrl);

module.exports = { mongoose };
