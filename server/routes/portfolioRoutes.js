const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');
const Project = require('../models/Project');
const Experience = require('../models/Experience');
const Skill = require('../models/Skill');
const Education = require('../models/Education');

// Get Profile
router.get('/profile', async (req, res) => {
    try {
        const profile = await Profile.findOne();
        res.json(profile || {});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Experience
router.get('/experience', async (req, res) => {
    try {
        const experience = await Experience.find().sort({ _id: -1 }); // Simplify sort for now
        res.json(experience);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Skills
router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Education
router.get('/education', async (req, res) => {
    try {
        const education = await Education.find();
        res.json(education);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
