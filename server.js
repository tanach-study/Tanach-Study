'use strict';
// if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const history = require('connect-history-api-fallback');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

// disable headers related to the server for security purposes
app.disable('x-powered-by');
app.disable('Server');

app.use(history({ logger: logger }))

app.use(express.static(path.join(__dirname, 'dist/html/')));
app.use(express.static(path.join(__dirname, 'dist/')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/favicons')));

app.use((err, req, res, next) => {
  if(err.status) {
    res.status(err.status).json(err.message);
  } else if (err.message) {
    res.status(500).json(err.message);
  } else {
    res.status(500).json('Internal Server Error');
  }
});

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
