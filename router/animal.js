var express = require('express');
var router = express.Router();
const execSQLQuery = require('../database/conection')


router.get('/animal/:id?', (req, res) => { // retorna os animais (com parametro retorna com filtro, sem parametro retorna todos, passar objeto com filtros)

    let whereFilter = ({ id, nome, sexo, idade, raca, local, dt_anuncio, status_adocao, cidade, uf, imagen, id_usuario_animal }) => {
        return filtro({ id, nome, sexo, idade, raca, local, dt_anuncio, status_adocao, cidade, uf, imagen, id_usuario_animal })

        function filtro(obj) {
            let result = "";
            let j = 0;
            for (var i in obj) {
                if (obj[i]) {
                    if (j > 0) result += ' AND '
                    result += ` ${i} = ${(parseInt(obj[i]))?obj[i]:"\'"+obj[i]+"\'"}`
                    j++
                }
            }
            if (result) result = " WHERE " + result
            return result;
        }
    }

    let filter = '';
    let id = parseInt(req.params.id)
    if (!id) filter = whereFilter(req.headers)
    else filter = `WHERE id = ${id}`
    execSQLQuery(`SELECT * FROM animal ${filter}`, res);
});

router.delete('/animal/:id', (req, res) => { // deleta animal, passar id no parametro
    let id = parseInt(req.params.id)
    if (!id) return res.send({ error: "ID invalido" })
    execSQLQuery(`DELETE FROM animal WHERE id = ${id}`, res);
});

router.post('/animal', (req, res) => { // salva usuario, passa objeto usuario no corpo da requisição
    const { id, nome, sexo, tipo_animal, idade, raca, local, status_adocao, cidade, uf, imagen, id_usuario_animal } = req.body
    let query = `INSERT INTO animal(nome,sexo,tipo_animal,idade,raca,local,dt_anuncio,status_adocao,cidade,uf,imagen,id_usuario_animal)
    VALUES("${nome}","${sexo}","${tipo_animal}",${idade},"${raca}","${local}",NOW(),"${status_adocao}","${cidade}","${uf}","${imagen}",${id_usuario_animal})`
    execSQLQuery(query, res);
});

router.put('/animal/:id', (req, res) => { //atualiza status de adoçao do animal
    const id = parseInt(req.params.id)
    const { status_adocao = 0 } = req.body
    execSQLQuery(`UPDATE animal SET status_adocao=${status_adocao} WHERE id =${id}`, res);
});


module.exports = router