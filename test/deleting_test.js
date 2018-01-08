const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Deleting records', () => {
  // Make char available in all test scopes
  var char;

  beforeEach((done) => {
    char = new MarioChar({ name: 'Mario' });
    char.save().then(() => {
      done();
    })
  });

  it('Deleting one record from the database', (done) => {
    MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
      MarioChar.findOne({ name: 'Mario' }).then((result) => {
        assert(result === null);
        done();
      });
    });
  });
});