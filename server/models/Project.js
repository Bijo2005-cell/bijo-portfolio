const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], default: [] },
    link: { type: String },
    image: { type: String },
    year: { type: String }
});

module.exports = mongoose.model('Project', projectSchema);
