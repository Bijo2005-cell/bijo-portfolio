const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    period: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: [String], required: true }
});

<<<<<<< HEAD
module.exports = mongoose.model('Experience', experienceSchema, 'experience');
=======
module.exports = mongoose.model('Experience', experienceSchema);
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
