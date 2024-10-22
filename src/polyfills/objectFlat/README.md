# Deep flatten object in Javascript
## Requirement
https://frontendlead.com/coding-questions/flatten-nested-objects


1. The function must ensure that if a key has a value of null or undefined, that should be present in output too
2.  This challenge tests your ability to manipulate object properties and recursively process nested structures, which is a common task in handling JSON data and configuring component states in frontend development.

## Question to interviewer
1. what if any object value is an arry, do we need to flatten them too

## Extension
1. https://learnersbucket.com/examples/interview/deep-flatten-object-in-javascript-1/ 
1.1 keep track of nested keys also in final key
1.2 keep track of array index too if any key has arr as value

## Learning Notes

- **Object.assign(obj1, obj2)**: Used to copy all enumerable properties from source objects (`obj2`) to a target object (`obj1`), effectively merging them.

- **Checking if a Value is an Object or Array**:
  - Using `Object.prototype.toString.call()`:
    - Object: `"[object Object]"`
    - Array: `"[object Array]"`
  - Using `typeof` with additional conditions:
    - `typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value !== 'function'`

- **Iteration Techniques**:
  - **Objects**: Use `for (const [key, value] of Object.entries(obj)) {}` to iterate over key-value pairs.
  - **Maps**: Use `for (const [key, value] of map) {}` to iterate over key-value pairs in a Map.
