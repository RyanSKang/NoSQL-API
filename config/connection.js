const { connect, connection } = require('mongoose');

// Boiler Code to connect to mongooseDB | Copied and pasted local MongoDB Connection String
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
