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