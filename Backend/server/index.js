const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const SheconnectsModel = require('./models/register');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/sheconnects_2', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    SheconnectsModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ success: true, username: user.username });
                } else {
                    res.status(400).json({ success: false, message: 'Password is incorrect' });
                }
            } else {
                res.status(400).json({ success: false, message: 'No record existed' });
            }
        })
        .catch(err => res.status(500).json({ success: false, message: err.message }));
});

app.post('/register', (req, res) => {
    const { username, email, password, gender } = req.body;

    if (gender !== 'Female') {
        return res.status(400).json({ message: 'Only female users are allowed to register' });
    }

    SheconnectsModel.create({ username, email, password, gender })
        .then(user => res.status(201).json(user))
        .catch(err => {
            console.error('Error during registration:', err.message); 
            if (err.code === 11000) {
                if (err.message.includes('username')) {
                    res.status(400).json({ message: 'Username already exists' });
                } else if (err.message.includes('email')) {
                    res.status(400).json({ message: 'Email already exists' });
                } else {
                    res.status(400).json({ message: 'Username or email already exists' });
                }
            } else {
                res.status(500).json({ message: 'Internal server error', error: err.message });
            }
        });
});

app.listen(3001, () => {
    console.log('Server is running');
});
