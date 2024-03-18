const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt'); 

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'karthykeya_vsoft',
    password: 'abcxyz@123K',
    database: 'blue222_signup1',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, accountType } = req.body;
    const query = 'INSERT INTO users_details (firstName, lastName, email, accountType) VALUES (?, ?, ?, ?)';

    pool.execute(query, [firstName, lastName, email, accountType], (err, results) => {
        if (err) {
            console.error('An error occurred:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(200).json({ id: results.insertId });
    });
});


app.post('/submit-form2', async (req, res) => {
    const { username, password} = req.body; 
    const saltRounds = 10;
    
    pool.query('SELECT * FROM users_details2 WHERE username = ?', [username], async (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Database query error'});
        }

        if (results.length > 0) {
            
            return res.status(409).json({error: 'User already exists'});
        }

      
        try {
            const bcrypt = require('bcrypt');
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            pool.query(
                'INSERT INTO users_details2 (username, password) VALUES (?, ?)',
                [username, hashedPassword],
                (err, results) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({error: 'Error creating user'});
                    }
                    res.status(201).json({message: 'User registered successfully'});
                }
            );
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error during user creation'});
        }
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
