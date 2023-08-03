// Defining dependency and routes to connection.js and routes folder
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Defining PORT and calling express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

// Connect app to server and console logging npm start success
db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
