import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const nodemailer = require('nodemailer');

async function sendEmail(email, username, token) {
    const name = "Tecnimontacargas Dual";
    const msg_title = "!Verificacion de correo electronico!";
    const sender = "noreply@app.com";
    const msg_body = "Haga clcik en el siguiente boton o en el link para terminar la verificacion de correo eletronico";
    const url = token;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });

    let mailOptions = {
        from: sender,
        to: email,
        subject: msg_title,
        html: `<h1>${name}</h1><h2>${msg_title}</h2><p>${username}</p><p>${msg_body}</p><p>${url}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "email sent" });
    } catch (e) {
        console.log(e);
        res.send(`the email was not sent ${e}`);
    }
}

export default {
    sendEmail
}