const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const route = express.Router();

const port = process.env.PORT || 5000;
app.use('/v1', route);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaysanghavi.jnext@gmail.com',
    pass: 'Jay@1525'
  }
});

route.post('/text-mail', (req, res) => {
    const {to, subject, text } = req.body;
   var mailOptions = {
        from: 'jaysanghavi.jnext@gmail.com',
        to: 'jaysanghavi1993@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy to use!',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>'
       
    };

  transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});

route.post('/attachments-mail', (req, res) => {
    const {to, subject, text } = req.body;
    var mailOptions  = {
         from: 'jaysanghavi.jnext@gmail.com',
        to: 'jaysanghavi1993@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy to use!',
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
        attachments: [
            {   // file on disk as an attachment
                filename: 'nodemailer.png',
                path: 'nodemailer.png'
            },
            {   // file on disk as an attachment
                filename: 'text_file.txt',
                path: 'text_file.txt'
            }
        ]
    };


 transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
});

