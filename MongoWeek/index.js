const mongoose = require('mongoose');

// Connection string to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/Week8';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log(`Connected to ${MONGO_URI}`))
    .catch((err) => console.error("Connection error: ", err));

// Define a schema
const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    gender: String,
    salary: Number
});

// Create a model
const Person = mongoose.model('Person', personSchema, 'personCollection');

// Update all documents where gender is 'Female' and set their salary to 5555
Person.updateMany({ gender: 'Female' }, { $set: { salary: 5555 } }) // Updates salary for all females
    .then((result) => {
        console.log(`Documents updated: ${result.modifiedCount}`);
    })
    .catch((err) => {
        console.error("Error updating documents:", err);
    });
