const mailcomposer = require('mailcomposer');

function generateEmailString(auth, senderName, fromEmail, subject, message) {
  const emailObj = {
    from: `${senderName} <${fromEmail}>`,
    sender: fromEmail,
    replyTo: fromEmail,
    subject: subject,
    text: message,
  };
  const mail = mailcomposer(emailObj);
  mail.build((err, message) => {
    if (err) console.log(err);
    sendEmail(auth, message);
  });
}

function sendEmail(auth, base64Email) {
  const gmail = google.gmail('v1');
  const request = gmail.users.messages.send({
    auth: auth,
    userId: 'me',
    resource: {
      raw: base64Email,
    }
  });
  request.execute((err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    } else {
      console.log(response);
    }
  })
}
