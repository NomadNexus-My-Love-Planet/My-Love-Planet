
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Place = require('./Models/place')
const Ort = require('./Models/ortdaten')
const Nutzer = require('./Models/nutzerdetails')
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

app.post('/daten', (req, res) => {
    Nutzer.create ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }).then((newdaten)=>{res.send(newdaten)})
    
    .catch(err => res.send(err))
});


app.post('/ortdaten', (req, res) => {
    Ort.create ({
        zipCode: req.body.zipCode,
        street : req.body.street,
    }).then((newdaten)=>{res.send(newdaten)})
    
    .catch(err => res.send(err))
});

app.get('/allplaces', async (req, res) => {
    const allplaces = await Place.find({})
    .catch((err) => res.status(500).send("Server Error"));
    res.status(200).json(allplaces);
})

app.get('/info', async (req, res) => {
    const bank = await Ort.find({})
    .catch((err) => res.status(500).send("Server Error"));
    res.status(200).json(bank);
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




