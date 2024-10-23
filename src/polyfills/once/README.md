/**
 * Write a function once that accepts a callback as input and returns a function.
 * When the returned function is called the first time,
 * it should call the callback and return that output. 
 * If it is called any additional times, 
 * instead of calling the callback again it will simply 
 * return the output value from the first time it was called
 */

##Common Applications of the once Function:
1. Initialization Code (Singleton Pattern): In many applications, certain initialization steps like setting up a connection, loading configuration files, or initializing libraries should happen only once. The once function can prevent unnecessary re-initialization.

2. Event Listeners: Sometimes, you want a function to be attached to an event listener that fires only once.