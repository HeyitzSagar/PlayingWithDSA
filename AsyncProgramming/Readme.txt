// problem statement 

1.The code snippet below is synchronous. It calls callback1 one time and
 callback2 three times. You must modify this code to make it asynchronous with the following rules:

callback1 must be called only one time, after 2 seconds.
callback2 must be called three times with an interval of 1 second.


example code : 
function job(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}

module.exports = job;


// questions 2.>

JavaScript coding questions based on asynchronous programming often focus on topics such as callbacks, promises, async/await, event loop, error handling, and concurrency. Here are some top JavaScript coding questions in this area:

1. **Callback Functions**:
   - Implement a callback-based function to read a file asynchronously.
   - Convert a callback-based function to return a promise.

2. **Promises**:
   - Write a function that returns a promise to simulate fetching data from an API.
   - Chain multiple promises using `then` to perform sequential asynchronous operations.
   - Handle errors in promise chains using `catch`.

3. **Async/Await**:
   - Convert a promise-based function to use async/await syntax.
   - Write an async function that makes multiple parallel API requests and aggregates the results.
   - Handle errors in async functions using try/catch blocks.

4. **Event Loop**:
   - Explain the event loop in JavaScript and how it handles asynchronous operations.
   - Describe the difference between microtasks and macrotasks in the event loop.

5. **Concurrency**:
   - Write code to demonstrate race conditions in asynchronous JavaScript.
   - Implement a semaphore using promises to control access to a shared resource.

6. **Error Handling**:
   - Demonstrate the differences between synchronous and asynchronous error handling in JavaScript.
   - Write code to handle errors in asynchronous operations gracefully.

7. **Asynchronous Patterns**:
   - Implement the publish-subscribe pattern using callbacks or promises.
   - Use async iterators to process a stream of asynchronous data.

8. **Timers and Delays**:
   - Write code to execute a function after a certain delay using `setTimeout`.
   - Implement debouncing or throttling techniques using timers.

9. **Async Iteration**:
   - Demonstrate the use of `for await...of` to iterate over asynchronous data streams.
   - Write an async generator function to generate a sequence of asynchronous values.

10. **Concurrency Control**:
    - Implement a semaphore or mutex using promises or async functions.
    - Solve producer-consumer or reader-writer synchronization problems using async primitives.

These questions often test candidates' understanding of asynchronous programming concepts
in JavaScript and their ability to write efficient and error-free asynchronous code.
They may also involve solving real-world problems involving asynchronous operations,
such as fetching data from APIs, processing streams, or handling concurrency issues.