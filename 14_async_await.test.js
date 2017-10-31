//** EXERCISE
/*

1 - create an http server in node using node platform, no external npm packages: https://nodejs.org/api/http.html#http_class_http_server
  the web server will return a json { message: "hello world" } 

2 - create an http client using `got` https://github.com/sindresorhus/got

3 - use a promise approach to output the response to the console + test

4 - use a promise + generator approach to output the response to the console + test

5 - use a aysnc/await approach to output the response to the console + test
*/

it.skip('should return { hello : "world"} with promises', done => {
  expect().toEqual({
    hello: 'world'
  });
});

it.skip('should return { hello : "world"} with generators and promises', done => {
  expect().toEqual({
    hello: 'world'
  });
});

it.skip('should return { hello : "world"} with async/await', done => {
  expect().toEqual({
    hello: 'world'
  });
});
