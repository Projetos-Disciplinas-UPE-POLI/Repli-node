const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!');
  res.send('gott mit uns');
});

app.listen(3000, () => {
  console.log('server started');
  
});
