/**
 The Promise.all() accepts an array of promises and returns a promise
that resolves when all of the promises in the array are fulfilled or when
the iterable contains no promises. It rejects with the reason of the first
promise that rejects.
 */

/**
 * Breakdown -
 * it accetps an array of promises
 * it return a promise
 * The promise will resolve with the result of all the passed
 * or reject with the error message of the first failed
promise.
*  The results are returned in the same order as the promises are in
the given array
 */

/**
 * Assumption - Promise API exists, if not we have to write polyfill for it too
 */

/**
 * Thought process -
 * store output result in an array
 * keep a counter to check if number of promises resolves === input arr.length
 *
 */

const myPormiseAll = (promisesArr) => {
  // store output result in an array
  const result = [];
  //   keep a counter to check of how many promises resolves
  let counter = 0;

  // it return a promise
  return new Promise((resolve, reject) => {
    promisesArr.forEach((inputPromise, index) => {
      //if promise passes
      Promise.resolve(inputPromise)
        .then((resolvedValue) => {
          result[index] = resolvedValue;
          counter++;
          // resolve with output result when all input promises are resolved
          if (counter === promisesArr.length) {
            resolve(result);
          }
        })
        .catch((rejectedValue) => {
          // reject when any input promise is rejected
          reject(rejectedValue);
        });
    });
  });
};

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

myPormiseAll([promise1, promise2, promise3]).then((values) => {
  console.log("krishna", values);
});
