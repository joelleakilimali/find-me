const nodemailer = require("nodemailer");
const { mailTemplate } = require("./mailTemplate");

const sendMail = async (
  destination,
  objectMessage,
  username,
  token,
  typeMessage
) => {
  const password = process.env.GMAIL_SENDER_PWD;
  console.log(objectMessage);
  const ACTIVATION_URL = process.env.ACTIVATION_URL;

  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_SENDER_ID,
      pass: process.env.GMAIL_SENDER_PWD,
    },
  });

  let mailDetails = {
    from: `"Find Me" <${process.env.GMAIL_SENDER_ID}>`,
    to: destination,
    subject: objectMessage,
    // text: "hello welcome ",
    html: mailTemplate(username, ACTIVATION_URL + token),
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) console.log("error occurs", err);
    else console.log("email sent successfuly");
  });
};
module.exports = {
  sendMail,
};
