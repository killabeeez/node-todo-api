// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


// in production example 
// it maight be amazon ws url or heroku url
// but in our case it is local host url
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server", err);
  }
  console.log("Connected to the MongoDB server");
  let database = db.db('TodoApp');

  // deleteMany
  // database.collection('Todos').deleteMany({text: 'eat lunch'}).then(result => {
  //   console.log(result);
  // })
  // deleteOne
  // database.collection('Todos').deleteOne({text: 'eat lunch'}).then(result => {
  //   console.log(result);
  // })
  //findOneAndDelete
  // database.collection('Todos').findOneAndDelete({completed: false}).then(result => {
  //   console.log(result);
  // })
  // database.collection('Users').deleteMany({name: 'Jen'}).then(result => {
  //   console.log(result);
  // })

  database.collection('Users').findOneAndDelete({_id: new ObjectID('5c1a85e31ea5bea76e72f917')}).then(result => {
    console.log(result);
  })

  // db.close();
}); 