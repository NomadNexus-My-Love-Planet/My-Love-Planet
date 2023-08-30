
// const express = require('express');
// const mongoos = require('mongoose')
// const app = express()

// const port = 3001

// // const mongodb = "mongodb+srv://NomadNexus:<password>@my-love-planet.vco2jng.mongodb.net/?retryWrites=true&w=majority"

// async function run() {  
//     await mongoos.connect('mongodb+srv://NomadNexus:<password>@my-love-planet.vco2jng.mongodb.net/?retryWrites=true&w=majority');

//     const UserSchema = await mongoos.Schema({
//     name: String,
//     age: Number
//     })

//     const User = mongoos.model('User', UserSchema);

//     await User.create({
//     name: 'Test',
//     age: 25
//     })
// }
// run()
// app.get('/', (req, res) => {
    

//     res.send('Hello von NomadNexus');
// });


// app.listen(port, () => {
//         console.log(`Server is Running on ${port}`);

// });

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 8080;

// Markieren Sie die run-Funktion als async
async function run() {
    try {
        

        await mongoose.connect('mongodb+srv://NomadNexus:techstarter5@my-love-planet.vco2jng.mongodb.net/Maps?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const UserSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        const User = mongoose.model('User', UserSchema);

        const newUser = new User({
            name: 'Test',
            age: 40
        });

        await newUser.save();

        console.log('User created successfully');
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




