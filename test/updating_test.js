const assert = require('assert');
const MarioChar = require('../models/MarioChar');

describe('Updating records', () => {
  var char;

  beforeEach((done) => {
    char = new MarioChar({ name: 'Mario' });
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

});