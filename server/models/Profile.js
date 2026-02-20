const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    location: { type: String },
    email: { type: String, required: true },
    socials: {
        github: String,
        linkedin: String,
        twitter: String
    }
});

module.exports = mongoose.model('Profile', profileSchema, 'profile');
