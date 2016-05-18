'use strict';

var app = require('../..');
var request = require('supertest');

var newResumen;

describe('Resumen API:', function() {

  describe('GET /api/resumen', function() {
    var resumens;

    beforeEach(function(done) {
      request(app)
        .get('/api/resumen')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          resumens = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      resumens.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/resumen', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/resumen')
        .send({
          name: 'New Resumen',
          info: 'This is the brand new resumen!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newResumen = res.body;
          done();
        });
    });

    it('should respond with the newly created resumen', function() {
      newResumen.name.should.equal('New Resumen');
      newResumen.info.should.equal('This is the brand new resumen!!!');
    });

  });

  describe('GET /api/resumen/:id', function() {
    var resumen;

    beforeEach(function(done) {
      request(app)
        .get('/api/resumen/' + newResumen._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          resumen = res.body;
          done();
        });
    });

    afterEach(function() {
      resumen = {};
    });

    it('should respond with the requested resumen', function() {
      resumen.name.should.equal('New Resumen');
      resumen.info.should.equal('This is the brand new resumen!!!');
    });

  });

  describe('PUT /api/resumen/:id', function() {
    var updatedResumen

    beforeEach(function(done) {
      request(app)
        .put('/api/resumen/' + newResumen._id)
        .send({
          name: 'Updated Resumen',
          info: 'This is the updated resumen!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedResumen = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedResumen = {};
    });

    it('should respond with the updated resumen', function() {
      updatedResumen.name.should.equal('Updated Resumen');
      updatedResumen.info.should.equal('This is the updated resumen!!!');
    });

  });

  describe('DELETE /api/resumen/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/resumen/' + newResumen._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when resumen does not exist', function(done) {
      request(app)
        .delete('/api/resumen/' + newResumen._id)
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
