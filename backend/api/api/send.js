import nodemailer from "nodemailer";

export default async function handler(req, res) {

const {name,email,phone,message} = req.body;

let transporter = nodemailer.createTransport({
service: "outlook",
auth: {
user: "prudischalunggmbh@outlook.com",
pass: "PASSWORD_EMAILIT"
}
});

await transporter.sendMail({
from: "prudischalunggmbh@outlook.com",
to: "prudischalunggmbh@outlook.com",
subject: "Neue Anfrage von Website",
text: `
Name: ${name}
Email: ${email}
Telefon: ${phone}
Nachricht: ${message}
`
});

res.status(200).json({success:true});
}