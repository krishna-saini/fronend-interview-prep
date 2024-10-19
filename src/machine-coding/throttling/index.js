/**
 * Creates a throttled version of the input function that will only execute once in the specified wait period.
 * @param {(...args: any[]) => any} func - The function to be throttled.
 * @param {number} wait - The delay period in milliseconds.
 * @returns {(...args: any[]) => any} A throttled version of the input function.
 */
function throttle(func, wait) {
    let timer = null;
    let lastArgs = null;
    return function throttled(...args) {
      if (!timer) {
        // initially it will be null and we will call func.apply
        func.apply(this, args);
        timer = setTimeout(() => {
          if (lastArgs) {
            // initially it is null, so no execution
            func.apply(this, lastArgs);
            lastArgs = null;
          }
          timer = null; // Clear the timer to allow future calls
        }, wait);
      } else {
        // till then it will keep discarding function calls made within `wait` period
        lastArgs = args;
        return;
      }
    };
  }
  
  let inputValue = ''; // Variable to hold the input value
  
  // Create a function to log the input value
  const logInputValue = (value) => {
    console.log(value);
  };
  
  // Create a throttled version of the logInputValue function
  const throttledLogInputValue = throttle(logInputValue, 2000);
  
  // Attach the onchange event listener to the input field
  document.getElementById('input').addEventListener('input', (event) => {
    inputValue = event.target.value; // Update inputValue with the current input
    throttledLogInputValue(inputValue); // Call the throttled function with the current input value
  });
  
  /**
   * try playing with above input button
   * type in it and experience the throllting and devleop the understanding instead of mugging up the concept
   */
  
  // Example usage to test the throttling behavior
  function logMessage(message) {
    console.log(`Message logged: ${message} at ${Date.now()}`);
  }
  
  const throttledLog = throttle(logMessage, 3000);
  
  // throttledLog('A'); // Executes immediately
  // setTimeout(() => throttledLog('B'), 1000); // Ignored
  // setTimeout(() => throttledLog('C'), 3000); // Executes
  // setTimeout(() => throttledLog('D'), 4000); // Ignored
  // setTimeout(() => throttledLog('E'), 8000); // Executes
  // setTimeout(() => throttledLog('F'), 9000); // Ignored
  // setTimeout(() => throttledLog('G'), 12000); // Executes
  