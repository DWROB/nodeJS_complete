const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('Hello from users');
  res.send('<h1>Welcome Users</h1>');
});

app.use('/', (req, res, next) => {
  console.log('Greetings from root');
  res.send('<h1>Welcome Home</h1>');
});


app.listen(3000);
