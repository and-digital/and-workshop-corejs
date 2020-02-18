# CORE JS WORKSHOP

## Getting Started...

1 - fork and clone this repo on your machine
2 - install or update nodejs to the latest version (8): ```brew install node```
3 - install [Jest](https://facebook.github.io/jest/) globally: ```npm install -g jest```
4 - install nodemon globally: ```npm install -g nodemon```
5 - install node modules: ```npm install```

** You should run the test individually **

```jest --watch <test-file>```

For the non test file, use nodemon to automatically load the change you (eventually) make

```
nodemon <file>
```


## Contributing:

* Each sub section should contain: 
    * Explanation file for the concept (Use Docco to go through the concept). Create a js file within `/src`, where your explanation is written in comments
    * Test javascript file (this if for the exercise) within `/exercises`

* Run the following commands to generate the doc files
    * `./node_modules/.bin/docco exercises/*`
    * `./node_modules/.bin/docco src/*` 

    
## Feedback / Updates To Make (Backlog)

- [ ] Update closure real world example to use private methods/vars (etc secrets)
- [ ] Update tests with better descriptions
- [ ] Look at the order of functional programming sections - we use reduce before we introduce it
- [ ] Look at lodash tests, define which are extras and give hints for throttle and memoize