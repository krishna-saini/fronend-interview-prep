## Definition of Throttling
Throttling limits how often a function can be executed over time. If a function is called multiple times within a certain period (the cooldown), it should only execute once after that period with/without any user action



## Requirements
1. The function should run immediately on the first call or any subsequenct first call after wait time.
2. The function should execute immediately after the wait period for any user action with arguments provided so far.
3. The function should run immediately after the wait period with all arguments provided so far if the user takes no action after the wait time.
4. The function should not run after the wait period if no function is invoked during the last waiting time.

---

# Thought Process
1. Invoke the function immediately on the first call.
2. Start a wait period after the initial invocation.
3. Handle Subsequent Calls:
   - If additional function calls occur during the wait time, discard their invocations but keep storing the last provided arguments.
4. After Wait Time:
   - Check if any function was invoked during the wait time (can be tracked by checking if arguments were updated).
     - If yes, invoke the function with the last arguments provided and reset `lastArgs` to `null`.
     - If the user takes no action, run the function with the last arguments provided (this can be achieved with a callback in `setTimeout`).
   - If the user makes any action, run the function again immediately with the last arguments provided (similar to step 1).
5. Repeat Steps 2-4: Continue this process for subsequent calls.

---

# Technical Thought Process
1. Use a variable (`lastArgs`) to keep track of the last arguments provided.
2. Implement a variable to track whether the timer is currently running or stopped.
