// Async / Await is simply a different way of writing Promises

// If you understand Promises, async/await is a walk in the park, so understand Promises _well_ first.

// ## Anatomy of async/await

// The async keyword must be applied to the function implementing await

// This fundamentally changes the behaviour of the function

// Now the async function by default, returns a promise

// Any time you want to make an async call (calling a function that returns a promise) you simply add the await keyword.

// For example...

const exampleAsync = async () => {
    const example = await facebook.getUser();
  
    return example;
  };
  
  // ## Converting Promises to async/await
  
  // Lets take the following example, implementing a 'facebook'-like module.
  
  // We want to get a user, then get their friends and photos asynchronously (at the same time) and amalgamate the results into a response as follows:
  
  // ```{
  //     name: 'Lou',​​​​​
  // ​​​​    ​friends: [ 'John', 'Sandra' ],​​​​​
  // ​​​​​    photos: [ 'family.jpeg', 'dog.jpeg' ]
  // }​​```​​​
  
  const facebook = {
    getUser: id => {
      return Promise.resolve({ name: 'Lou' });
    },
  
    getFriends: id => {
      return Promise.resolve(['John', 'Sandra']);
    },
  
    getPhotos: name => {
      return Promise.resolve(['family.jpeg', 'dog.jpeg']);
    }
  };
  
  const PromiseImplementation = () => {
    return facebook.getUser().then(user => {
      return Promise.all([facebook.getFriends(), facebook.getPhotos()]).then(
        ([friends, photos]) => ({
          ...user,
          friends,
          photos
        })
      );
    });
  };
  
  PromiseImplementation().then(data => {
    console.log(data);
  });
  
  // Let's re-write this as async/await
  
  const asyncAwaitImplementation = async () => {
    const user = await facebook.getUser();
  
    const [friends, photos] = await Promise.all([
      facebook.getFriends(),
      facebook.getPhotos()
    ]);
  
    return {
      ...user,
      friends,
      photos
    };
  };
  
  asyncAwaitImplementation().then(data => {
    console.log(data);
  });
  
  // ## async/await and try..catch
  
  // Let's first see what would happen if we don't handle the error...
  
  const exampleWithUnhandledError = async () => {
    const user = await Promise.reject('Oh no, something went wrong');
    return user;
  };
  
  exampleWithUnhandledError()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
  
  // Then, lets see what happens if we do handle the error...
  
  const exampleWithHandledError = async () => {
    try {
      const user = await Promise.reject('Oh no, something went wrong');
    } catch (e) {
      return null;
    }
    return user;
  };
  
  exampleWithHandledError()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });