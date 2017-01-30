const nodemailer = require('nodemailer');

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

const transporter = nodemailer.createTransport(`smtps://${gmailUser}:${gmailPass}@smtp.gmail.com`);
