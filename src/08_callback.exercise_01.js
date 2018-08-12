//## 01 refactor this code, using named function and passing them as callback

const fs = require('fs');

const file = './todo.txt';
fs.readFile(file, 'utf8', function(err, todoList) {
  if (err) return console.log(err);

  todoList = todoList + '\n watch GOT';
  fs.writeFile(file, todoList, function(err) {
    if (err) return console.log(err);
    console.log('todo added!');
  });
});

//## 02 create a 08_callback.exercise_01.test.js file and... test :)
