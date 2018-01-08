const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Finding records', () => {
  beforeEach((done)=> {
    var char = new MarioChar({ name: 'Mario' });
    char.save().then(()=> {
      done();
    })
  });

  // Single test
  it('Find a single record in the database', (done) => {
    MarioChar.findOne({ name: 'Mario' }).then((result) => {
      assert(result.name === 'Mario');
      done();
    });
  });
});