const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');
  const db = client.db('ToDoApp');

  // db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID('5ae0e58a8b772c5eff71f340')
  //  }, {
  //    $set: {
  //      completed: true
  //    }
  //  }, {
  //    returnOriginal: false
  //  }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae0dc087073137df8a533b5')
  }, {
    $set: {
      name: 'Jamal'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  client.close();
});
