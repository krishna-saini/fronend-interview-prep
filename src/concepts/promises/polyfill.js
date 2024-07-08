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
  }
}

const executor = setTimeout(() => console.log('logging after 5s'), 5000);
