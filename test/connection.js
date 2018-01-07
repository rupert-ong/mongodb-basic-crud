const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to DB before tests run
before((done) => {
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/testaroo');
  
  mongoose.connection.once('open', () => {
    console.log('Connection has been made');
    done();
  }).on('error', err => {
    console.log(`Connection error: ${err}`);
  });
});