
var express = require('express');
var bodyParser = require('body-parser');
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
  })
});

// app.get('/todos')

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// var newTodo = new Todo({
//   text: 'cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc)
// }, e => {
//   console.log('Unable to save todo', e)
// });

// var someTodo = new Todo({
//   text: 'feed the cat'
// });

// someTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2))
// }, e => {
//   console.log('Unable to save todo', e)
// });



// var newUser = new User({
//   email: 'radec43@hotmail.com'
// });

// newUser.save().then((doc) => {
//   console.log('Created new user', doc);
// }, e => {
//   console.log('Unable to add new user', e);
// })