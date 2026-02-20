const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    year: { type: String, required: true },
    institution: { type: String, required: true },
    degree: { type: String, required: true }
});

<<<<<<< HEAD
module.exports = mongoose.model('Education', educationSchema, 'education');
=======
module.exports = mongoose.model('Education', educationSchema);
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
