const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    // Error handling inside the promise
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might cause an error
    const shouldReject = Math.random() < 0.5; 
    if (shouldReject) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    } 
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});