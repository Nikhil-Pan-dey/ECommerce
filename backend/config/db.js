const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Connected to the database');
    } catch (err) {
        console.error('Failed to connect to the database', err);
    }
}

module.exports = connectDB;

// To automatically connect when the module is required
// connectDB();
