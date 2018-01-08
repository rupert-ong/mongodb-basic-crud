const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Updating records', () => {
  var char;

  beforeEach((done) => {
    char = new MarioChar({
      name: 'Mario',
      weight: 50
    });
    char.save().then(() => {
      done();
    })
  });

  it('Update one record from the database', (done) => {
    MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(() => {
      MarioChar.findOne({ _id: char._id }).then((result) => {
        assert(result.name === 'Luigi');
        done();
      })
    });
  });

  it('Increments weight by 1', (done) => {
    // Update all records. Use increment operator (value can be +/-)
    MarioChar.update({}, { $inc: { weight: 1 } }).then(() => {
      MarioChar.findOne({ _id: char._id }).then((result)=> {
        assert(result.weight === 51);
        done();
      });
    });
  });
});