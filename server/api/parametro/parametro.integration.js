'use strict';

var app = require('../..');
var request = require('supertest');

var newParametro;

describe('Parametro API:', function() {

  describe('GET /api/parametro', function() {
    var parametros;

    beforeEach(function(done) {
      request(app)
        .get('/api/parametro')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          parametros = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      parametros.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/parametro', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/parametro')
        .send({
          name: 'New Parametro',
          info: 'This is the brand new parametro!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newParametro = res.body;
          done();
        });
    });

    it('should respond with the newly created parametro', function() {
      newParametro.name.should.equal('New Parametro');
      newParametro.info.should.equal('This is the brand new parametro!!!');
    });

  });

  describe('GET /api/parametro/:id', function() {
    var parametro;

    beforeEach(function(done) {
      request(app)
        .get('/api/parametro/' + newParametro._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          parametro = res.body;
          done();
        });
    });

    afterEach(function() {
      parametro = {};
    });

    it('should respond with the requested parametro', function() {
      parametro.name.should.equal('New Parametro');
      parametro.info.should.equal('This is the brand new parametro!!!');
    });

  });

  describe('PUT /api/parametro/:id', function() {
    var updatedParametro

    beforeEach(function(done) {
      request(app)
        .put('/api/parametro/' + newParametro._id)
        .send({
          name: 'Updated Parametro',
          info: 'This is the updated parametro!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedParametro = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedParametro = {};
    });

    it('should respond with the updated parametro', function() {
      updatedParametro.name.should.equal('Updated Parametro');
      updatedParametro.info.should.equal('This is the updated parametro!!!');
    });

  });

  describe('DELETE /api/parametro/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/parametro/' + newParametro._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when parametro does not exist', function(done) {
      request(app)
        .delete('/api/parametro/' + newParametro._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
