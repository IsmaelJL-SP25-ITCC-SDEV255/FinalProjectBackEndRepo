const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/Home.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Home.html'));
});

app.get('/Login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Login.html'));
});

app.get('/Register For Class.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Register For Class.html'));
});

app.get('/Schedule.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Schedule.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});