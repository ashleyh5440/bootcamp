// TODO: Import express / or Router
const express = require('express');
// Create app variable to create an instance of express()
const app = express.Router(); // small optimized version - meant to do only routing
// const app = express(); // big expensive version

// TODO: Import modules for tips/feedback
const tipRoutes = require('./tips');
const feedbackRoutes = require('./feedback');

// TODO: Use our routes
app.use('/tips', tipRoutes);
app.use('/feedback', feedbackRoutes);

// TODO: Export app
module.exports = app;