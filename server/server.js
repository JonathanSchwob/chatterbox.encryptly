const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/test', function(req, res, next) {
  res.send('Hello world fuck off!');
});

app.listen(PORT, () => {
  console.log('server is up and running on port', PORT);
});
