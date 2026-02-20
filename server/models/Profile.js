const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String, required: true },
    location: { type: String },
    email: { type: String, required: true },
<<<<<<< HEAD
    socials: {
=======
    socialLinks: {
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
        github: String,
        linkedin: String,
        twitter: String
    }
});

<<<<<<< HEAD
module.exports = mongoose.model('Profile', profileSchema, 'profile');
=======
module.exports = mongoose.model('Profile', profileSchema);
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
