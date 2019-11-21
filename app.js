const express = require('express');
const fs = require('fs');
const debug = require('debug')('webnc:app');

const app = express();

const { version } = JSON.parse(fs.readFileSync('./package.json'));

app.get('/', (_req, res) => {
  res.json({
    message: 'Hello Web NC',
  });
});

app.get('/info', (_req, res) => {
  res.json({
    name: 'hello-web-nc',
    version,
  });
});

const port = process.env.PORT || 3000;

app.listen(port);
debug(`Server ${version} is listening on port ${port}`);
