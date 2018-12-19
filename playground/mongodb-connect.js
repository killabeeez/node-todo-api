// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
// const test = require('assert')

// in production example 
// it maight be amazon ws url or heroku url
// but in our case it is local host url
MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to the MongoDB server");
  let database = db.db('TodoApp');
  // database.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log("Unable to instert todo", err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })
  database.collection('Users').insertOne({
    name: 'Alexander',
    age: 27,
    location: 'Belgrade'
  }, (err, result) => {
    if(err) {
      return console.log("Unable to instert todo", err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
    console.log(JSON.stringify(result.ops[0]))
  })
  db.close();
}); 