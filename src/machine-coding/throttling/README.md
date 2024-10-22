## Definition of Throttling
Throttling limits how often a function can be executed over time. If a function is called multiple times within a certain period (the cooldown), it should only execute once after that period with/without any user action.

For the first mouse movement the decorated variant immediately passes the call to update. That’s important, the user sees our reaction to their move immediately

### Links
Problem -
Test case 1 - https://plnkr.co/edit/hXYTiNGcB0hq2ZV2?p=preview&preview
Test case 2 - https://bigfrontend.dev/problem/implement-basic-throttle
Demo -> https://stackblitz.com/edit/js-idpx6b?file=index.js

## Requirements
1. The function should run immediately on the first call.
2. The function should execute immediately after the wait period with the last argument if there is an attempt to invoke the function during cooling period
3. The function should not execute after the wait period if there is no invocation of function happened during last cooling period
4. The function should cool down after every invocation.

---

### Thought Process
1. Invoke the function immediately on the first call.
2. Start a wait period after the initial invocation.
3. Handle Subsequent Calls:
   - If additional function calls occur during the wait time, discard their invocations but keep storing the last provided arguments.
4. After Wait Time:
   - Check if any function was invoked during the wait time (can be tracked by checking if arguments were updated).
     - If yes, invoke the function with the last arguments provided and reset `lastArgs` to `null`.
5. Repeat Steps 2-4: Continue this process for subsequent calls.

---

### Technical Thought Process
1. Use a variable (`lastArgs`) to keep track of the last arguments provided.
2. Implement a variable to track whether the timer is currently running or stopped.


##  Extension of the problem
1. implement a enhanced throttle() which accepts third parameter, option: {leading: boolean, trailing: boolean}
2. The leading option will whether to invoke right away at start or after the cooling period  if any invocation happens after cooling perios
3. Trailing ensures that the function will execute with the most recent arguments at the end of each cooldown period if any invocation happens
4. leading false is required in cases like window resizing, show tooltip
5. trailing false is required in cases like abusing mouse click action.
{leading: false, trailing: false}, of course, nothing happens.


for wait = 3second
expect(run(['A@1','B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14'], {leading: true, trailing: false}))
  .toEqual(['A@1', 'D@5', 'E@11'])

  expect(run(['A@1','B@2', 'C@3', 'D@5', 'E@11', 'F@13', 'G@14'], {leading: false, trailing: true}))
  .toEqual(['C@4', 'D@7', 'G@14'])