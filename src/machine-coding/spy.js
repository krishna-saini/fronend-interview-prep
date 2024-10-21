// question with test cases - https://plnkr.co/edit/R7efK9wZmOFKktML?p=preview

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:

// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function spy(func) {
    // your code
    const calls = [];
    function innerFn(...args) { // dont use arrow function
      calls.push(args);
      return func.apply(this, args);
      
    }
    innerFn.calls = calls;
    return innerFn;
  }