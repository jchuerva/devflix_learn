const express = require('express');
const config = require('./config');
const videosApi = require('./routes/videos')

const app = express();

// for post method... to understand json data
app.use(express.json());

// example API
// moved to the routes folder
// app.use('/hello', (req, res) => {
//   res.send('hola');
// });

videosApi(app)

app.listen(3000, () => {
  console.log(`API Server Listening on http://localhost:${config.port}`);
});
