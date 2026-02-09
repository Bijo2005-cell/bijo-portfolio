require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Update for production
        methods: ["GET", "POST"]
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bijo_portfolio';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Routes
const contactRoutes = require('./routes/contactRoutes');
const chatRoutes = require('./routes/chatRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api', portfolioRoutes);

// Socket.io - System Status Simulation
io.on('connection', (socket) => {
    console.log('Client connected for system status');

    // Emitting fake "microservice" health data every 5 seconds
    const statusInterval = setInterval(() => {
        const statusWeb = Math.random() > 0.1 ? 'Operational' : 'Degraded';
        const statusAI = Math.random() > 0.05 ? 'Operational' : 'Maintenance';
        const latency = Math.floor(Math.random() * 100) + 20;

        socket.emit('systemStatus', {
            timestamp: new Date(),
            services: {
                web: statusWeb,
                ai_engine: statusAI,
                database: 'Operational'
            },
            latency: latency + 'ms'
        });
    }, 5000);

    socket.on('disconnect', () => {
        clearInterval(statusInterval);
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
