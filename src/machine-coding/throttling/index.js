
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {

  //     1. once called,
 //       - if cooling, stash the call
 //       - if not colling, run it  and set the timer
 //     2. when time is up, reset cooling
 //       - if stashed call, call it, go to 1
 
 let timer = null;
 let lastArgs = null;
 let lastContext = null;
 const check = () => {
   timer = null; // reset the calling
   if (lastArgs) {
     // initially it is null, so no execution
     func.apply(lastContext, lastArgs);
     lastArgs = null;
     // start cooling time again
     startCooling();
   }
 };
 const startCooling = () => {
   timer = window.setTimeout(check, wait);
 };

 function throttled(...args) {
   if (!timer) {
     // initially it will be null and we will call func.apply
     func.apply(this, args);
     startCooling();
   } else {
     // till then it will keep discarding function calls made within `wait` period
     lastArgs = args;
     lastContext = this;
   }
 }
 return throttled;
}




// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttleExtended(func, wait, option= {leading:true, trailing: true}) {

//     1. once called,
 //       - if cooling, stash the call
 //       - if not colling, run it  and set the timer
 //     2. when time is up, reset cooling
 //       - if stashed call, call it, go to 1
 
 let timer = null;
 let lastArgs = null;
 let lastContext = null;
 const check = () => {
   timer = null; // reset the calling
   if (lastArgs && option.trailing) {
     // initially it is null, so no execution
     func.apply(lastContext, lastArgs);
     lastArgs = null;
     // start cooling time again
     startCooling();
   }
 };
 const startCooling = () => {
   timer = window.setTimeout(check, wait);
 };

 function throttled(...args) {
   if (!timer) {
     // initially it will be null and we will call func.apply
     if(option.leading){
     func.apply(this, args);
     }
     startCooling();
   } else {
     // till then it will keep discarding function calls made within `wait` period
     lastArgs = args;
     lastContext = this;
   }
 }
 return throttled;
}




