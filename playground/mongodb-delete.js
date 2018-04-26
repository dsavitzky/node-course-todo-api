const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('ToDoApp');

  // deleteMany
  db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    console.log(result);
  });
  // deleteOne
  db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    console.log(result);
  });
  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    console.log(result);
  });
  db.collection('Users').deleteMany({name: 'Dan'}).then((result) => {
    console.log(result);
  })
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5ae0dd2bd8a62f7e53e2d0cd')}).then((result) => {
    console.log(result);
  })
  client.close();
});
