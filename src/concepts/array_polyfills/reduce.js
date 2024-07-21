const arr = [1, 2, 4, 5, -6];
const sum = (acc, current) => {
  return acc + current;
};
const x = arr.reduce(sum, 0);
console.log("krishna", x);

/**
 * implement polyfill of reduce
 * params - an array , callback function
 * output - a single value(number, string, boolean, not object)
 */
// if (!Array.prototype.reduce) {
const myReduce = (arr, cb, initialValue = 0) => {
  if (!Array.isArray(arr) || typeof cb !== "function") {
    throw new Error("input is not an array");
  }
  let acc = initialValue;
  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }

  return acc;
};
// }

console.log("polyfill", myReduce(arr, sum, 1));

/**
 * now create polyfill of reduce without passing arr as an arguments
 take use of this keyword
 */
Array.prototype.myReduce2 = function (cb, initialValue = 0) {
  if (!Array.isArray(this) || typeof cb !== "function") {
    throw new Error("input is not an array");
  }

  let acc = initialValue;
  // iterate through array
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this); // pass all args that reduce is accepting
  }

  return acc;
};

console.log("polyfill2 via prototype ", [].myReduce2(sum, 0));
