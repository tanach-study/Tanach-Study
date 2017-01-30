const dbConnection = require('../lib/dbConnection.js');
const nodemailer = require('../lib/contactMailer.js');
const { isValidEmail } = require('../lib/lib.js');

function sendEmail (req, res, next) {
  const fromEmail = req.body.from_address;
  const subject = req.body.subject;
  const message = req.body.message;

  if (!(fromEmail && subject && message)) return next(new Error('Please fill out all the fields.'));
  if (! isValidEmail(fromEmail)) return next(new Error('Invalid email.'));
}

module.exports = {
  sendEmail,
}
