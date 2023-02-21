var http = require('http');
var fs = require('fs');
var express = require("express");
var nodemailer = require("nodemailer");

var app = express();
app.use(express.static(__dirname+"/public"));
app.get("/send",function (req,res) {
    let from = req.query.from;
    var password = req.query.password;
    var to = req.query.to;
    var subject = req.query.subject;
    var text = req.query.text;

    var transporter = nodemailer.createTransport({
        service: "Hotmail",
        auth: {
            user: from,
            pass: password
        }
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions);
});

const server = http.createServer(app);
server.listen(8080);