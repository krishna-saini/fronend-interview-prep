// Interviewer - write polyfill of memoise

// lets first discuss what is meaning of memoisationx
// when a function is memoised, then the function will do all the heavy calculation for the very first invocation and store the result in a cache and from subsequent invocation of that function with same arguments, it will return the restult from the cache and will not recalculate it. it argument changes, it will recalcuate the whole calcualation

// how do we use memo actually
// we wrap the function around memo. it means memo is a function which takes another function as an arg.
// it should return the result of that function either from cache or from acutal calculation
// const x = memo(yourFn)
// x().
const slowFunction = (...args) =>
    args.reduce((acc, current) => acc + current, 0);
  
  const memoize = (fn) => {
    const cache = {};
    const innerFn = (...args) => {
      // check if args are same
      // how to check last args and current args
      // somehow we have to store last args somewhere
      // so lets store the last args as key of cache
      // to store args as key of cache, we need to convert them in string
      const cacheKey = JSON.stringify(args); // args is an array
  
      // now check if current args are already stored in cache
  
      if (cache.hasOwnProperty(cacheKey)) {
        console.log('returning from cache');
        // if yes , return result from cache
        return cache[cacheKey];
      }
      console.log('returning from acutal calculation');
  
      // else execute the fn and store the result in cache and return cache
      cache[cacheKey] = fn(...args);
      return cache[cacheKey];
    };
  
    return innerFn;
  };
  
  const memoizedFunction = memoize(slowFunction);
  console.log('hello memo1', memoizedFunction(1, 2));
  console.log('hello memo2', memoizedFunction(1, 3));
  console.log('hello memo1 again', memoizedFunction(1, 2));
  