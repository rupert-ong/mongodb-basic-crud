const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Finding records', () => {
  // Make char available in scopes
  var char;

  beforeEach((done)=> {
    char = new MarioChar({ name: 'Mario' });
    char.save().then(()=> {
      done();
    })
  });

  // Tests
  it('Finds one record from the database', (done) => {
    MarioChar.findOne({ name: 'Mario' }).then((result) => {
      assert(result.name === 'Mario');
      done();
    });
  });

  it('Finds one record by ID from the database', (done) => {
    MarioChar.findOne({ _id: char._id }).then((result) => {
      assert(result._id.toString() === char._id.toString());
      done();
    })
  });

  it('Find all records from the database', (done) => {
    var newChar = new MarioChar({ name: 'Toadstool' });
    newChar.save().then(() => {
      MarioChar.find().then((results) => {
        assert(results.length === 2);
        done();
      });
    });
  });
});