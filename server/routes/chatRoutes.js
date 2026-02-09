const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Gemini
// Note: In production, ensure API key is set safely.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "YOUR_API_KEY_HERE");

router.post('/message', async (req, res) => {
    try {
        const { message } = req.body;
        // For a portfolio chatbot, we want to give it a specific persona
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // System prompt tailored for Bijo's portfolio
        const systemPrompt = `You are a helpful AI assistant for Bijo K Binoy's portfolio website. 
    Your goal is to answer questions about Bijo's skills, projects, and background.
    
    Key Info about Bijo:
    - Full Stack Developer & MLOps Enthusiast.
    - Skills: JavaScript, Python, PHP, C++, React, Node.js, MongoDB, CNN, OpenCV.
    - Projects: Sahayatri (AI Monument Crack Detection), Food Delivery Platform, Movie Booking.
    - Role: 3-Year Representative, NSS Volunteer.
    
    If asked about something unrelated, politely steer back to Bijo's professional profile.
    Keep answers concise and professional yet friendly.`;

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: systemPrompt }],
                },
                {
                    role: "model",
                    parts: [{ text: "Understood. I am ready to answer questions about Bijo K Binoy." }],
                }
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error('AI Chat Error:', error);
        // Fallback for demo if no API key
        res.json({ reply: "I'm currently unable to connect to the AI brain (Check API Key). But Bijo is great at MERN stack!" });
    }
});

module.exports = router;
