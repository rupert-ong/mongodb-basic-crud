const assert = require('assert');
const MarioChar = require('../models/MarioChar');
const mongoose = require('mongoose');

// Describe tests
describe('Saving records', () => {

  // Create tests
  it('Save a record to the database', (done) => {
    var char = new MarioChar({
      name: 'Mario' 
    });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  // Next test
});