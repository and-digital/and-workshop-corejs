// # Glossary

// #### Lexical Scope

// The scope that you can "see". It's set in stone when the code is written. 

// What will a and b be? 
let a = 1;

a = a + 1;

// **Output: ```2```** 
console.log(a);

// ```a``` equals 2, it will always be two, there's no way of dynamically changing this. 

// #### Dynamic Scope

// Scope that changes at run-time. It's not set in stone when the code is written. 

// What will this be? 
function whatIsDynamicScopeDoe() {
    // **Output:** ```Nobody knows...```
    console.log(this);
}

// That's right, nobody knows ... until you run it. 