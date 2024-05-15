/**
 * Currying is a technique of working iwth functions.
 *
 * Normally, a function takes all its arguments at once and gives you a result.
 *  But with currying, you break down a function that takes multiple arguments into a series of functions, each taking one argumen
 *
 *
 * It is a transformer of functions that translates a function from
 * callable as f(a,b,c) into callable as f(a)(b)(c)
 *
 */

// example

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}
const curriedGreet = (greet) => {
  return (greeting) => {
    return (name) => {
      return greet(greeting, name);
    };
  };
};

const greetFn = curriedGreet(greet);
const greetwithHello = greetFn('Hello');
const greet_p1 = greetwithHello('krishna');
const greet_p2 = greetwithHello('krish');

const sum = (...numbers) =>
  numbers.reduce((total, currentNum) => total + currentNum, 0);

/**
 * Problem1 -> Implement basic curried sum function of two number
 * currySum(2)(3) -> 5
 *
 */
const curry = (fn) => {
  return (a) => {
    return (b) => {
      return fn(a, b);
    };
  };
};

const curriedSum = curry(sum);
console.log(curriedSum(2)(3));

/**
 * Problem2 ->  implement infinite curry sum function which can add any number of args
 * sum(4)(5)(9)(1) -> 4+5+9+1
 */
const infiniteCurry = (fn) => {
    return function curry(...args1) {
        const a = fn(...args1);
      
      return (...args2) => {
          const b = fn(...args2);
        if (args2.length>0 && b !== undefined) {
          return curry(fn(a, b));
        }
        return a;
      };
    };
  };
  
  const inifiniteCurrySum = infiniteCurry(sum);
  console.log(inifiniteCurrySum(1)(2)(3)(4)()); // we need one extra function invoking at the end which detects that now there are no more args
  console.log("krishna", infiniteCurry(sum)(1,5)(3,6)(0)())


/**
 * Problem3 -> Modify above such that it can take multiple args in call
 * infiniteCurrySum(1,2)(3) -> 6
 */

/**
 * 3. implement lodash curried fn
 * which can take args in any form
 * (a,b,c), (a)(b)(c), (a,b)(c)
 */
const lodashCurriedSum = (sum) => {};
