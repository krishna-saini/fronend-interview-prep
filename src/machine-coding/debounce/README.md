## Debounce
1. Debouncing, in the context of programming, means to "batch" all operations requested during a specific interval into a single invocation.

2. Debouncing is very similar to throttling. The key difference is that throttling enforces limits on continuous operations, while debouncing waits for invocations to stop for a specific time to consolidate many noisy invocations into one single invocation.


## Requirements 
1. he debounce function returns a new function that takes any number of arguments (...args).
2. wait time starts from last invocation it means if mulitple invocation happening, start timer after last invocation
3. Once the timer has elapsed without the debounced function being called again, the function is executed