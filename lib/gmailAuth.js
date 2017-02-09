const fs = require('fs');
const readline = require('readline');
const googleAuth = require('google-auth-library');
const credentials = require('../client_secret.json');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/gmail-nodejs-quickstart.json
const SCOPES = ['https://www.googleapis.com/auth/gmail.compose'];
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'gmail-nodejs-quickstart.json';

/**
 * Create an OAuth2 client with the global credentials, and then returns an
 * OAuth2 client object.
**/
function authorize() {
  const clientSecret = credentials.installed.client_secret;
  const clientId = credentials.installed.client_id;
  const redirectUrl = credentials.installed.redirect_uris[0];
  const auth = new googleAuth();
  const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);


  return new Promise((resolve, reject) => {
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function(err, token) {
      if (err) {
        const resp = getNewToken(oauth2Client);
        if (resp instanceof Error) return reject(resp);
        oauth2Client.credentials = resp;
      } else {
        oauth2Client.credentials = JSON.parse(token);
      }
      return resolve(oauth2Client);
    });
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * return the new token to the caller.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 */
function getNewToken(oauth2Client) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return err;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      return token;
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}

module.exports = {
  authorize,
  getNewToken,
  storeToken,
}
