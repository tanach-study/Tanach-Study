const mailcomposer = require('mailcomposer');
const google = require('googleapis');
const base64url = require('base64url');
const gmailAuth = require('../lib/gmailAuth.js');
const { isValidEmail } = require('../lib/lib.js');

function getAuthObject(req, res, next) {
  gmailAuth.authorize()
  .then(obj => {
    res.authObj = obj;
    next();
  })
  .catch(err => next(err));
}

function generateEmailString(req, res, next) {
  const senderName = req.body.name;
  const fromEmail = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  if (!(fromEmail && subject && message)) return next(new Error('Please fill out all the fields.'));
  if (! isValidEmail(fromEmail)) return next(new Error('Invalid email.'));

  const toEmail = process.env.TO_EMAIL;

  const emailObj = {
    from: `${senderName} <${fromEmail}>`,
    to: toEmail,
    sender: fromEmail,
    replyTo: fromEmail,
    subject: subject,
    text: message,
  };
  const mail = mailcomposer(emailObj);
  mail.build((err, message) => {
    if (err) next(err);
    res.base64Email = base64url(message);
    next();
  });
}

function sendEmail(req, res, next) {
  const auth = res.authObj;
  const base64Email = res.base64Email;

  const requestObj = {
    auth: auth,
    userId: 'me',
    resource: {
      raw: base64Email,
    }
  };

  const executeCB = (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return next(err);
    } else {
      res.data = {
        status: 'OK',
        response: response,
      };
      next();
    }
  };

  const gmail = google.gmail('v1');
  const request = gmail.users.messages.send(requestObj, executeCB);
}

module.exports = {
  getAuthObject,
  generateEmailString,
  sendEmail,
}
