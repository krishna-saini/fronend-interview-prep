/**
 * A promise has 3 states -
 * 1. while creation - state is pending and result is UD
 * 2. if promise is resolved(success) -> state is fullfilled and result is the resolved value
 * 3. if promise is resolved(error) -> state is rejected and result is the resolved value
 *
 * The Promise must keep track of its current state (pending, fulfilled, rejected).
 * When a Promise is fulfilled, it stores the resolved value. When rejected, it stores the reason for rejection.
 */

const promise1 = new Promise((resolve, reject) => {
  // after some async task
  resolve('resovled value');
});

// The promise is a constructor which accepts an executor function as a parameter.
// The executor function has a resolve callback, and a reject callback as its parameter.
if (!window.Promise) {
  class CustomPromise {
    #state;
    #value;
    #onResolvedCallbacks;
    #onRejectedCallbacks;

    constructor(executor) {
      const PENDING = 'pending';
      const FULFILLED = 'fulfilled';
      const REJECTED = 'rejected';

      this.#state = PENDING;
      this.#value = null;
      this.#onResolvedCallbacks = []; // Callbacks for resolved state
      this.#onRejectedCallbacks = []; // Callbacks for rejected state

      const resolve = (result) => {
        if (this.#state !== PENDING) return;

        this.#state = FULFILLED;
        this.#value = result;

        this.#onResolvedCallbacks.forEach((cb) => cb(this.#value));
      };

      const reject = (error) => {
        if (this.#state !== PENDING) return;

        this.#state = REJECTED;
        this.#value = error;

        this.#onRejectedCallbacks.forEach((cb) => cb(this.#value));
      };

      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
    /**
     * The then() method of Promise instances takes up to two arguments:
     * callback functions for the fulfilled and rejected cases of the Promise.
     *
     * It immediately returns another Promise object, allowing you to
     * chain calls to other promise methods.
     *
     * then(onFulfilled, onRejected)
     * onFulfilled - A function to asynchronously execute when this promise becomes fulfilled
     *
     * onRejected(optional) - A function to asynchronously execute when this promise becomes rejected
     */
    then(successCallback, rejectedCallback) {
      return new CustomPromise((resolve, reject) => {
        if (this.#state === 'fulfilled') {
          try {
            const result = successCallback(this.#value);
            // When callbacks return promises, you should chain them
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        } else if (this.#state === 'rejected') {
          try {
            const result = rejectedCallback(this.#value);
            if (result instanceof CustomPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        }
      });
    }

    /**
     * The catch() method of Promise instances schedules a function to be called
     * when the promise is rejected. It immediately returns another Promise object,
     * allowing you to chain calls to other promise methods
     *
     * . It is a shortcut for Promise.prototype.then(undefined, onRejected).
     */
    catch(rejectedCallback) {
      return this.then(null, rejectedCallback);
    }
  }
}

const executor = (resolve) =>
  setTimeout(() => resolve('logging after 1s'), 1000);
console.log(new CustomPromise(executor));
