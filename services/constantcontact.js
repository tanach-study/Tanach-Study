const fetch = require('node-fetch');
const dbConnection = require('../lib/dbConnection.js');
const { isValidEmail } = require('../lib/lib.js');

function validateData (req, res, next) {
  const email = req.body.email;
  const fname = req.body.firstName;
  const lname = req.body.lastName;

  if (!(email && fname && lname)) next(new Error ('Please fill out all fields.'));
  if (!isValidEmail(email)) next(new Error ('Please submit a valid email address.'));

  // if we're here then all is good
  next();
}

function checkIfEmailExists (req, res, next) {
  const email = req.body.email;
  const key = process.env.CC_KEY;
  const token = process.env.CC_TOKEN;
  const url = `https://api.constantcontact.com/v2/contacts?api_key=${key}&email=${email}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  .then(r => r.json())
  .then(data => {
    // if the results set is empty then we're good to continue
    if (data.results.length == 0) {
      next();
    } else {
      next(new Error ('This email address is already registered.'));
    }
  })
  .catch(err => next(err));
}

function registerEmail (req, res, next) {
  const email = req.body.email;
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const key = process.env.CC_KEY;
  const token = process.env.CC_TOKEN;
  const listId = process.env.CC_LIST_PROD;
  const url = `https://api.constantcontact.com/v2/contacts?api_key=${key}&action_by=ACTION_BY_VISITOR`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      lists: [
        {
          id: listId
        }
      ],
      email_addresses: [
        {
          email_address: email
        }
      ],
      first_name: fname,
      last_name: lname,
    }),
  })
  .then(r => r.json())
  .then(resp => {
    if (resp.id) {
      res.data = {
        status: 'OK',
      }
      next();
    } else {
      next(new Error('Internal error.'));
    }
  })
  .catch(err => next(err));
}

module.exports = {
  validateData,
  checkIfEmailExists,
  registerEmail,
}
