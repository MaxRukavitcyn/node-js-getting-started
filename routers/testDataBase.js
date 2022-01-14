const express = require('express');
const testDataBase = express.Router();
const { Client } = require('pg');


testDataBase.get('/test', function(req, response) {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    client.connect();

    client.query('SELECT * FROM public.test_table;', (err, res) => {
        if (err) throw err;
        let result = '';
        for (let row of res.rows) {
            result += JSON.stringify(row);
        }
        response.send(result);
        client.end();
    });
});

module.exports = testDataBase;
