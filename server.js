const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", async (req,res)=>{

const {name,email,phone,message} = req.body;

let transporter = nodemailer.createTransport({

service:"outlook",

auth:{
user:"prudischalunggmbh@outlook.com",
pass:"PASSWORDI_EMAILIT"
}

});

let mailOptions = {

from:"prudischalunggmbh@outlook.com",

to:"prudischalunggmbh@outlook.com",

subject:"Neue Anfrage von Website",

text:`

Name: ${name}
Email: ${email}
Telefon: ${phone}

Nachricht:
${message}

`

};

await transporter.sendMail(mailOptions);

res.send("Email gesendet");

});

app.listen(3000, ()=>{
console.log("Server läuft auf Port 3000");
});