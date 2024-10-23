function debounce(func, wait) {
    let timer;
  
    return function(...args) {
      // Clear the previous timer if the function is called again within the wait time
      clearTimeout(timer);
  
      // Set a new timer
      timer = setTimeout(() => {
        func.apply(this, args); // Execute the function after the wait time has passed
      }, wait);
    };
}


/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounceExtension1(func, wait, option = { leading: false, trailing: true }) {
  let timer;
  let isLeadingCalled = false;
  
  return function (...args) {
    const context = this;

    // Ensure at least one of leading or trailing is enabled
    if (!option.leading && !option.trailing) {
      return;
    }

    // Clear any existing timer to reset the debounce period
    clearTimeout(timer);

    // Handle the leading option: invoke the function immediately on the first call
    if (option.leading && !isLeadingCalled) {
      isLeadingCalled = true;
      func.apply(context, args);
      return; // to make sure the leadinf fn does not called again after wait time

    }

    // Set a timer for the trailing call, if needed
    timer = setTimeout(() => {
      // Handle trailing option: invoke the function at the end of the debounce period
      if (option.trailing) {
        func.apply(context, args);
      }

      // Reset the leading invocation flag so that to call any function immediately if invoked after wait time is over
      isLeadingCalled = false;
    }, wait);
  };
}