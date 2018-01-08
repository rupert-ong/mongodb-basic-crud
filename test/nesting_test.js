const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/Author');

describe('Nesting records', () => {

  beforeEach((done) => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });

  it('Create an author with sub-documents', (done) => {
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{ title: 'Name of the Wind', pages: 400 }]
    });

    pat.save().then(() => {
      Author.findOne({ name: 'Patrick Rothfuss' }).then((result) => {
        assert(result.books.length === 1);
        done();
      });
    });
  });

  it('Adds a book to an author', (done) => {
    var pat = new Author({
      name: 'Patrick Rothfuss',
      books: [{ title: 'Name of the Wind', pages: 400 }]
    });

    pat.save().then(() => {
      Author.findOne({ name: 'Patrick Rothfuss' }).then((result) => {
        // Add book to Books array
        result.books.push({
          title: 'Wise Man\'s Fear',
          pages: 500
        });
        result.save().then(() => {
          Author.findOne({ name: 'Patrick Rothfuss' }).then((result) => {
            assert(result.books.length === 2);
            done();
          });
        })
      });
    });
  });
});