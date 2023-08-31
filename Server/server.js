const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = 8080;

// Markieren Sie die run-Funktion als async
async function run() {
    try {
        

        await mongoose.connect('mongodb+srv://NomadNexus:techstarter5@my-love-planet.vco2jng.mongodb.net/Maps?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const MapsSchema = new mongoose.Schema({
            city: String,
            state: String,
            postalcode: Number
        });

        const Maps = mongoose.model('Maps', MapsSchema);

        const newMaps = new Maps({
            city: 'Meschede',
            state: 'NRW',
            postalcode: 59872
        });

        await newMaps.save();

        console.log('Maps Created Successfully');
    } catch (error) {
        console.error('Error:', error);
    }
}

// Rufen Sie die run-Funktion auf
run();

app.get('/', (req, res) => {
    res.send('Hello von NomadNexus');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});




