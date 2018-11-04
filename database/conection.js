const execSQLQuery = (sqlQry, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'pets'
    });

    connection.query(sqlQry, (error, results, fields) => {
        if (error)
            res.json(error);
        else
        if (results[0])
            res.json(results);
        else
            res.json({ erro: 'nao obteve retorno' })
        connection.end();
        //console.log('executou!');
    });
}

function test() {
    console.log("TSESTEE")
}

module.exports = execSQLQuery;