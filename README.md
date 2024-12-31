# Unhandled Promise Rejection in Node.js Express.js

This repository demonstrates a common yet subtle bug in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Unhandled rejections can lead to application instability and difficult-to-track errors.

## The Bug

The `bug.js` file contains an Express.js server with a route handler that performs an asynchronous operation. This operation might reject a promise, simulating a potential error scenario.  The problem is that the rejection is not properly handled, leading to an unhandled promise rejection.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections.  By using a `.catch()` block within the promise chain, we ensure that any errors are caught and handled gracefully, preventing unhandled rejections.  The solution also includes logging to help with debugging.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`. Observe that the server might silently fail occasionally. 
4. Run `node bugSolution.js`. The server will now handle errors gracefully and log them to the console.