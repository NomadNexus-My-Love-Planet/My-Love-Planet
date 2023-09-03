
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Place = require('./Models/place')
const db = require("./db");
const cors = require('cors');


const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// Body Parser Middleware (für POST-Anfragen)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', (req, res) => {
    res.send('Hello from everywhere');
});

app.post('/add', (req, res) => {
    Place.create ({
        name: req.body.name,
        country : req.body.country,
        reminder: req.body.reminder,
        note:  req.body. note,
        visit: req.body.visit
    }).then((newplace)=>{res.send(newplace)})

    .catch(err => res.send(err))
});

// Mussen wir noch anpassen

app.post('/ortdaten', (req, res) => {
    Place.create ({
        name: req.body.name,
        country : req.body.country,
        reminder: req.body.reminder,
        note:  req.body. note,
        visit: req.body.visit
    }).then((newplace)=>{res.send(newplace)})
    
    .catch(err => res.send(err))
});



// Neuen Ort hinzufügen
app.post('/orte', async (req, res) => {
try {
    const {
    name,
    country,
    city,
    visitedDate,
    reminder,
    linkedPlaces,
    } = req.body;
    const neuerOrt = new Ort({
    name,
    country,
    city,
    visitedDate,
    reminder,
    linkedPlaces,
    });
    const gespeicherterOrt = await neuerOrt.save();
    res.status(201).json(gespeicherterOrt);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




