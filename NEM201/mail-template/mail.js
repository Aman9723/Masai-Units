const nodemailer = require('nodemailer');
const hbs = require('handlebars');
const fs = require('fs/promises');

const emailUsername = 'anonymusstranger52';
const emailPassword = 'lfqxrvgapciflqik';

// read the file and compile
const template = hbs.compile(fs.readFileSync('./mail.hbs', 'utf-8'));

// go to ethereal.email to generate a random mail
// it will show all the send mails there and is prefered for testing

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: emailUsername,
        pass: emailPassword,
    },
});

const sendMail = async (email, username) => {
    transporter
        .sendMail({
            to: `${email}`,
            from: 'admissions.masaischool.com',
            subject: 'signup success',
            html: template({
                user: username,
                license: age > 18 ? 'You are eligible' : 'You are not eligible',
            }),
        })
        .then(() => console.log('mail sent'));
};

module.exports = sendMail;
