const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    year: { type: String, required: true },
    institution: { type: String, required: true },
    degree: { type: String, required: true }
});

module.exports = mongoose.model('Education', educationSchema);
