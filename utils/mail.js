import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');
import config from './config.js';
const fs = require('fs');

async function sendEmail(email, username, token) {
    const msg_title = "¡Verifica tu dirección de correo electrónico!";
    const url = "tecnimontacargasdual.net/auth/"+token;
    let msg_body = fs.readFileSync('utils/correo.html',{encoding:'utf8'});
    msg_body = msg_body.replace("{{username}}", username);
    msg_body = msg_body.replace("{{url}}", url);


    let transporter = nodemailer.createTransport({
        host: config.MAIL_SERVER,
        port: config.MAIL_PORT,
        secure: config.MAIL_USE_TLS,
        auth: {
            user: config.MAIL_USERNAME,
            pass: config.MAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: config.MAIL_USERNAME,
        to: email,
        subject: msg_title,
        html: msg_body
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("email sent");
        return "email sent";
    } catch (e) {
        console.log(`the email was not sent ${e}`);
        return `the email was not sent ${e}`;
    }
}

export default {
    sendEmail
}