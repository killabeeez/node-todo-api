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
  // database.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c1a6c4b0162a90742157fa4')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // })

  // update user name

  // database.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5c1a6d2a77ac59077fa74a0b')
  // },{
  //   $set: {
  //     name: 'Alex'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //     console.log(res);
  // })

  // update user age
  database.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c1a6d2a77ac59077fa74a0b')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  })

  // db.close();
}); 