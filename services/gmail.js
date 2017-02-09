const mailcomposer = require('mailcomposer');
const google = require('googleapis');
const gmailAuth = require('../lib/gmailAuth.js');
const base64url = require('base64url');

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

function executeCB(err, response) {
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
}

function sendEmail(req, res, next) {
  const auth = res.authObj;
  const base64Email = res.base64Email;

  const gmail = google.gmail('v1');
  const request = gmail.users.messages.send({
    auth: auth,
    userId: 'me',
    resource: {
      raw: base64Email,
    }
  });
  res.data = request;
  next();
}

module.exports = {
  getAuthObject,
  generateEmailString,
  sendEmail,
}
