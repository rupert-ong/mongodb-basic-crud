const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
  console.log('Connection has been made');
}).on('error', err => {
  console.log(`Connection error: ${err}`);
});