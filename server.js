'use strict';
if (process.env.NODE_ENV == 'development') require('dotenv').config({ silent: true });
const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');
const history      = require('connect-history-api-fallback');

const app          = express();
const PORT         = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

// allow CORS on the entire site
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// build API routes
app.use('/api/sefarim', require('./routes/sefarim.js'));
app.use('/api/perakim', require('./routes/perakim.js'));
app.use('/api/videos', require('./routes/videos.js'));

app.use(history({ logger: logger }))

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
