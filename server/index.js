const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	port: 3306,
	password: '123456',
	database: 'test'
});
connection.connect();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/api/add', (req, res) => {
    const result = { status: '정상', code: '00' };
    var txt = req.body.txt;
    var done = req.body.done;
    console.log(req.body)
    console.log(req.body.txt)
	connection.query('INSERT INTO work (plan,done) VALUES (?,?)',[txt,done], function(error, results, fields) {
        if (error) {
			 throw error;
        } 
            console.log(results);
            res.status(200).json({ result: result, results: results }); 
    });
});
app.post('/api/read', (req, res) => {
    const result = { status: '정상', code: '00' };
	connection.query('SELECT * FROM work', function(error, results, fields) {
        if (error) {
			 throw (error)
        }
		console.log(results)
        res.status(200).json({ result: result, results: results });
      
	});
	
   
});

 

app.listen(3000, () => {
	console.log('http://localhost:3000');
});
