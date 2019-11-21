const express = require('express');
const fs = require('fs');

const app = express();

const version = JSON.parse(fs.readFileSync('./package.json')).version;

app.get('/', function (_req, res) {
  res.json({
    message: 'Hello Web NC',
  });
});

app.get('/info', function (_req, res) {
  res.json({
    name: 'hello-web-nc',
    version,
  });
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Server ${version} is listening on port ${port}`)
