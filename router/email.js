var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');


router.post('/email', (req, res) => { // envia email, passar objeto animal e usuario
    enviarEmail(req.body[0], req.body[1], res)
});


function enviarEmail(animal, usuario, res) {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'petl0vers@outlook.com', // generated ethereal user
                pass: 'Petlovers' // generated ethereal password
            }
        });

        let conteudo_email = `<center>
                              Seu bichinho quer ser Adotado!! <br><br>
                              id : <b>${animal.id}</b><br>
                              nome : <b>${animal.nome}</b><br><br>
                              Quer ser adotado por : <b>${usuario.nome}</b><br>
                              Entre em contato :<br> <b>${usuario.nome}<br> ${usuario.email}<br> ${usuario.telefone}</b>  
                              </center>`

        let mailOptions = {
            from: '"Adote um Amigo" <petl0vers@outlook.com>',
            to: usuario.email,
            subject: 'Solicitação de Adoção | PETLOVERS ✔',
            //text: 'virus?',
            html: conteudo_email
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.json({ error: "Nao foi possivel enviar o email", erro: error });
            }
            res.json({ status: "Email Enviado!", info })
        });
    });
}

module.exports = router;