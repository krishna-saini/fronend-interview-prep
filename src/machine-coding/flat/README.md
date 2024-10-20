@link - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

Question - https://bigfrontend.dev/problem/implement-Array-prototype.flat

write polyfill of it 
it takes an array and a depth in arguments
Requirements - 
1. shallow copy
2. remove empty slots upto the depth


## Misc
1. The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
2. The flat() method is a copying method. It does not alter `this` but instead returns a shallow copy that contains the same elements as the ones from the original array.
3. The flat() method removes empty slots if the array being flattened is sparse. 
4.  sparse array empty slots can be omitted if you loop via for in or for each or map (https://playcode.io/2052152)


## extension of the problem
1. solve it without using recursion / iteration
2. now write the function to flat objects