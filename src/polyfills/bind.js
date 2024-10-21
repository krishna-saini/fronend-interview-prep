/**
 * Polyfill Requirements for Function.prototype.bind:
 * 
 * 1. It should take a context of an object as an argument. It also takes a function as an argument. 
 *    Additionally, it should accept some values as arguments which act as initial bounded arguments of the function during invocation.
 * 
 * 2. Return - A copy of the given function with the specified `this` value and initial arguments (if provided).
 * 
 * Additional Requirements:
 * 
 * 1. If the bind method is called on something that is not a function, it should throw a TypeError.
 * 
 * 2. The length of the target function minus the number of arguments being bound (not counting the `thisArg` parameter),
 *    with 0 being the minimum value.
 * 
 * 3. If the new function is called with the `new` keyword, the bound function should behave like a constructor.
 * 
 * 4. The prototype of the original function should be preserved, allowing the bound function to inherit from it.
 */

// Function.prototype.bind = null; // originally this is how polyfills are written
if (!Function.prototype.bind) {
    Function.prototype.bind = bindWrapper;
    console.log("here")
  } // starts with this
  const bindWrapper = (fn, thisContext, ...initialArgs) => {
    // Ensure the function is callable
      if (typeof fn !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
  function innerFunction(...args) { 
    return fn.call(thisContext,...initialArgs, ...args)
  }
    innerFunction.size = fn.length;
  
  return innerFunction;
  }
  
  //Example 1
  const exampleObj = {
    name: 'prashant',
    };
    function example(blog) {
      console.log("this", this)
    console.log(`${this.name} runs ${blog}`);
    };
    // const bounded = example.bind(exampleObj);
    const bounded = bindWrapper(example, "krishna");
    bounded('learnersbucket');
    // "Prashant runs learnersbucket"
    bounded('MDN');


    // Example2
    function addArguments(arg1, arg2) {
        return arg1 + arg2;
    }
    // Create a function with a preset first argument.
    // const addThirtySeven = addArguments.bind(null, 37,2);
    const addThirtySeven = bindWrapper(addArguments, null, 37);
    console.log(addThirtySeven(5)); // arg1-37, arg2=5 , total = 42
    console.log(addThirtySeven(5, 10)); // 42


    // Example 3
    const button = {
        text: 'Click me',
        onClick: function() {
          console.log("onclick triggered",this.text);
        }
    };
      
    const anotherButton = { text: 'Another Button' };
    setTimeout(button.onClick, 1000); // Output: undefined
    // when button.onClick is passed to setTimeout, 
    //it is invoked as a standalone function, not as a method of the button object
    // in standalone function, this refers to undefined or window object.
    
    // solution -> bind its this
    setTimeout(button.onClick.bind(button), 1000); // Output: 'Click me'
    setTimeout(bindWrapper(button.onClick, button))


    // Example 4 ( new constructor) 
    // TODO: 
    function Person(name) {
        this.name = name;
      }
      
      // Create a bound function
      const boundPerson = bindWrapper(Person, null, "Bob");