'use strict';
require('dotenv').config({ silent: true });
const express      = require('express');
const logger       = require('morgan');
const path         = require('path');
const bodyParser   = require('body-parser');
const history      = require('connect-history-api-fallback');

const app          = express();
const PORT         = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(history({ logger: logger }))

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.warn(`Server here! Listening on port ${PORT}!`));
