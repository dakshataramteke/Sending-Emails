const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  try {
    // Connect with Gmail
    const transporter = nodemailer.createTransport({
      // service: 'gmail', 
      host:"smtp.gmail.com",
      auth: {
        user: 'dakshataramteke18@gmail.com', // Your Gmail address
        pass: 'oycyegjeifgequtz', // Your App Password (if 2FA is enabled)
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Dakshata Ramteke" <dakshataramteke18@gmail.com>', // sender address
      to: req.body.to || "dakshataramteke00@gmail.com", // list of receivers (you can get this from the request body)
      subject: req.body.subject || "Hello ✔", // Subject line
      text: req.body.message || "Hello world!", // plain text body
      html: `<b>${req.body.message || "Hello world!"}</b>`, // html body
    });

    console.log("Message sent: %s", info);
    res.json(info);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
};

module.exports = sendMail;