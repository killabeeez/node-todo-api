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
  // database.collection('Todos').find({
  //   _id: new ObjectID('5c1a6c4b0162a90742157fa4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch todos', err)
  // })
  // database.collection('Todos').find().count().then((count) => {
  //   console.log('Todos count', count);
  // }, (err) => {
  //   console.log('Unable to fetch todos count', err);
  // })
  database.collection('Users').find({name: 'Alexander'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    console.log('Unable to fetch todos', err)
  })

  // db.close();
}); 