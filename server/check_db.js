const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'bijo_portfolio';
const MONGODB_URI = `${mongoUrl}/${dbName}`;

console.log('Connecting to:', MONGODB_URI);

async function check() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('CONNECTED');
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log(`Found ${collections.length} collections.`);

        for (const col of collections) {
            const count = await db.collection(col.name).countDocuments();
            console.log(`- ${col.name}: ${count} docs`);
        }

        process.exit(0);
    } catch (err) {
        console.error('ERROR:', err.message);
        process.exit(1);
    }
}

check();
