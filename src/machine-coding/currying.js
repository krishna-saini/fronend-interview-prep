
// currying

// write a function which can take any number of args and return their sum

const sum = (...numbers) => {
    return numbers.reduce((total, currentNum) => total + currentNum, 0);
  };
  
  console.log(sum());
  
  // Write a JS function to implement Add(1)(2)(3)…(n)() or just Add(1)(2)(3) that returns 6 or may be Add(1,2)(3,4) that returns 10?
  
  function Add(...args) {
    // Accumulate the initial arguments
    let sum = args.reduce((acc, num) => acc + num, 0);
    console.log(sum);
    // now since we can multiple invocation of this function
    // we need to return a funcion
    // this function should keep on checking if there are arguments
    // and called itself recursively
    // Return a function that continues accepting arguments
    function innerFunction(...nextArgs) {
      console.log('here', nextArgs);
      if (nextArgs.length === 0) {
        // When called without arguments, return the sum
        return sum;
      } else {
        // Otherwise, add to the sum and keep chaining
        sum += nextArgs.reduce((acc, num) => acc + num, 0);
        return innerFunction;
      }
    }
  
    return innerFunction;
  }
  
  // const infiniteCurrySum = infinityCurry(1,2);
  console.log(Add(1, 2)());


  // playground - https://stackblitz.com/edit/javascript-pkd7g5?file=index.js
  