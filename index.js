const express = require('express');
const config = require('./config');

const app = express();

app.use('/hello', (req, res) => {
  res.send('hola');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`API Server Listening on http://localhost:${config.port}`);
});
