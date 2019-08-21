// helper function to do a regex test against a given email
function isValidEmail(email) {
  // regex for testing an email obtained from http://www.regular-expressions.info/email.html
  // on 11/25/2016
  // allows for all valid emails - including those on subdomains of subdomains, up to the maximum
  // SMTP supports - for more info, see above article
  const emailRegex = new RegExp(/^[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i);
  // more basic regex obtained from the same article as the previous one
  // const emailRegex = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return emailRegex.test(email);
}

module.exports = {
  isValidEmail,
};
