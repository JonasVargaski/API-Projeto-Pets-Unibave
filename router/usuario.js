var express = require('express');
var router = express.Router();
const execSQLQuery = require('../database/conection')


router.get('/usuario/:id?', (req, res) => { // retorna os usuarios (com parametro retorna com filtro, sem parametro retorna todos)
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery(`SELECT * FROM usuario ${filter}`, res);
});

router.post('/usuario', (req, res) => { // salva usuario, passa objeto usuario no corpo da requisição
    const { id, nm_usuario, sexo, cpf, dt_nascimento, cep, endereco, numero, bairro, complemento, uf, cidade, telefone, email, senha } = req.body
    let query = `INSERT INTO usuario(nm_usuario,sexo,cpf,dt_nascimento,cep ,endereco,numero,bairro,complemento,uf,cidade,telefone,email,senha) VALUES("${nm_usuario}","${sexo}","${cpf}","${dt_nascimento}","${cep}","${endereco}",${numero},"${bairro}","${complemento}","${uf}","${cidade}",${telefone},"${email}","${senha}")`
    execSQLQuery(query, res);
});

router.delete('/usuario/:id', (req, res) => {
    let id = parseInt(req.params.id)
    if (!id) return res.send({ error: "ID invalido" })
    execSQLQuery(`DELETE FROM usuario WHERE id = ${id}`, res);
});


module.exports = router;