const mongoose = require('mongoose');

// Boiler Code to connect to mongooseDB | Copied and pasted local MongoDB Connection String
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("debug", true);

module.exports = mongoose.connection;
