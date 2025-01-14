const express = require('express');
const app = express();
const fals = require('./fal.json');
const path = require('path');
const fs = require('fs');

const homePath = path.join(__dirname, '/view');

const falPath = path.join(__dirname, 'fal.json')

app.use(express.static(homePath));

app.get('/api/fal', (req, res) => {
    try{
        const data = JSON.parse(fs.readFileSync(falPath));
        if(!data || data.length === 0) {
            res.status(500).json({message: "No data found!"});
        }

        const randomPoem = Math.floor(Math.random() * data.length);
        res.json(data[randomPoem]);
    } catch (err) {
        console.error("Something went wrong : " + err);
        res.status(500).json({message: "Internal Server Error!"});
    }
});

app.get('/', (req, res) => {
    res.status(200);
    res.sendFile(path.join(homePath, '/fal.html'));
});

app.listen(3000, () => {console.log('server is started on port 3000')});

module.exports = app;