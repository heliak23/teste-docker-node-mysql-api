const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((error, connection) => {
    if (error) {
        console.log("Erro ao conectar no BD: " + error);
    } else {
        console.log("Conectado ao MySQL com sucesso!");
        connection.release(); // Libera a conexão de volta para o pool
    }
});

app.get('/tarefas', (req, res) => {
    pool.query('SELECT * FROM tarefas', (err, results) => {
        if (err) res.status(500).send('Erro no banco: ' + err.message);
        else res.json(results);
    });
});

app.listen(port, () => console.log('API rodando na porta ${port}'));
