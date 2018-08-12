//## CALLBACKS

//## SYNCHRONOUS CALLBACKS
let numbers = [2, 4, 8, 10];
let halves = numbers.map(function(x) {
  x / 2;
});
// halves is now [1, 2, 4, 5]
// numbers is still [2, 4, 8, 10]

numbers = [1, 4, 9];
roots = numbers.map(Math.sqrt);

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

const arr = ['a', 'b', 'c'];

arr.forEach(function(element) {
  console.log(element);
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', function(answer) {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

// rl.question('All good? ', logAnswer);

// function logAnswer(answer) {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// }

//## ASYNCHRONOUS CALLBACK

const http = require('http');
const httpOptions = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/comments'
};

http.get(httpOptions, function(res) {
  let data = '';
  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    //console.log(JSON.parse(data));
  });
});

const fs = require('fs');
fs.readdir('..', function(err, files) {
  console.log(files);
});

fs.readdir('..', listFiles);

function listFiles(err, files) {
  console.log('\nfiles from listFiles function', files);
}
