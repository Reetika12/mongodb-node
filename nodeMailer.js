var nodeMailer = require("nodemailer");
var transport = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: "reetika.singh05@gamil.com",
    pass: "Chhotu02@",
  },
});

var mailOptions = {
  from: "reetika.singh05@gmail.com",
  to: "reetika.singh05@gmail.com",
  subject: "test node mail",
  text: "Hello this is first mail to check for channel subscription",
};
transport.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email has been sent", info.response);
  }
});
