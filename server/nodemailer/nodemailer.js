const nodemailer = require("nodemailer");
module.exports.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  auth: {
    user: "hanlinaungdummy2@gmail.com",
    pass: "dummypassword"
  }
});
module.exports.mailOptions = {
  from: "hanlinaungdummy2@gmail.com",
  to: "hanlinaunghack@gmail.com", // list of receivers
  subject: "Hello", // Subject line
  text: "Someone posted comment here at http://52.53.238.151/comments"
};
