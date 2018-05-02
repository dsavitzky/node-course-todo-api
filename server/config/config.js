const env = process.env.NODE_ENV || 'development';
console.log('env ***********', env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
  process.env.MONGODB_URI = 'mongodb://admin:password123@ds259109.mlab.com:59109/node-todo-api';
}
