import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import config from './config.js';
const fs = require('fs');

const nodemailer = require('nodemailer');
const postmarkTransport = require('nodemailer-postmark-transport');

//Servidor SMTP privado
let transporter = nodemailer.createTransport(postmarkTransport({
    auth: {
        apiKey: config.POSTMARK_API_KEY
    }
}))

async function sendEmail(email, username, token) {
    const msg_title = "¡Verifica tu dirección de correo electrónico!";
    const url = config.BACK_URL_REMOTO + "/login/auth/" + token;
    let msg_body = fs.readFileSync('utils/correo.html', { encoding: 'utf8' });
    msg_body = msg_body.replace("{{username}}", username).replace("{{username}}", username);
    msg_body = msg_body.replace("{{url}}", url).replace("{{url}}", url).replace("{{url}}", url);

    //Works en local
    // let transporter = nodemailer.createTransport({
    //     host: config.MAIL_SERVER,
    //     port: config.MAIL_PORT,
    //     secure: config.MAIL_USE_TLS,
    //     auth: {
    //         user: config.MAIL_USERNAME,
    //         pass: config.MAIL_PASSWORD
    //     }
    // });

    let mailOptions = {
        from: config.MAIL_USERNAME,
        to: email,
        subject: msg_title,
        text: msg_title,
        html: msg_body
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("email sent " + info);
        return "email sent";
    } catch (e) {
        console.log(`the email was not sent ${e}`);
        return `the email was not sent ${e}`;
    }
}

async function sendEmailRecuperar(email, username, token) {
    const msg_title = "¡Cambio de Contraseña!";
    const url = config.BACK_URL_REMOTO + "/recuperar/" + token;
    let msg_body = fs.readFileSync('utils/recuperar.html', { encoding: 'utf8' });
    msg_body = msg_body.replace("{{username}}", username).replace("{{username}}", username);
    msg_body = msg_body.replace("{{url}}", url).replace("{{url}}", url).replace("{{url}}", url);


    // let transporter = nodemailer.createTransport({
    //     host: config.MAIL_SERVER,
    //     port: config.MAIL_PORT,
    //     secure: config.MAIL_USE_TLS,
    //     auth: {
    //         user: config.MAIL_USERNAME,
    //         pass: config.MAIL_PASSWORD
    //     }
    // });

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

async function sendEmailContactenos(email, username) {
    const msg_title = "Gracias por Comunicarse con nosotros";
    let msg_body = fs.readFileSync('utils/contactenos.html', { encoding: 'utf8' });
    msg_body = msg_body.replace("{{username}}", username).replace("{{username}}", username);

    //Works en local
    // let transporter = nodemailer.createTransport({
    //     host: config.MAIL_SERVER,
    //     port: config.MAIL_PORT,
    //     secure: config.MAIL_USE_TLS,
    //     auth: {
    //         user: config.MAIL_USERNAME,
    //         pass: config.MAIL_PASSWORD
    //     }
    // });

    let mailOptions = {
        from: config.MAIL_USERNAME,
        to: email,
        subject: msg_title,
        text: msg_title,
        html: msg_body
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("email sent " + info);
        return "email sent";
    } catch (e) {
        console.log(`the email was not sent ${e}`);
        return `the email was not sent ${e}`;
    }
}

export default {
    sendEmail,
    sendEmailRecuperar,
    sendEmailContactenos,
}