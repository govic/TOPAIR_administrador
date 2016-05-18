'use strict';

var app = require('../..');
var request = require('supertest');

var newUbicacion;

describe('Ubicacion API:', function() {

  describe('GET /api/ubicacion', function() {
    var ubicacions;

    beforeEach(function(done) {
      request(app)
        .get('/api/ubicacion')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          ubicacions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      ubicacions.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/ubicacion', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/ubicacion')
        .send({
          name: 'New Ubicacion',
          info: 'This is the brand new ubicacion!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newUbicacion = res.body;
          done();
        });
    });

    it('should respond with the newly created ubicacion', function() {
      newUbicacion.name.should.equal('New Ubicacion');
      newUbicacion.info.should.equal('This is the brand new ubicacion!!!');
    });

  });

  describe('GET /api/ubicacion/:id', function() {
    var ubicacion;

    beforeEach(function(done) {
      request(app)
        .get('/api/ubicacion/' + newUbicacion._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          ubicacion = res.body;
          done();
        });
    });

    afterEach(function() {
      ubicacion = {};
    });

    it('should respond with the requested ubicacion', function() {
      ubicacion.name.should.equal('New Ubicacion');
      ubicacion.info.should.equal('This is the brand new ubicacion!!!');
    });

  });

  describe('PUT /api/ubicacion/:id', function() {
    var updatedUbicacion

    beforeEach(function(done) {
      request(app)
        .put('/api/ubicacion/' + newUbicacion._id)
        .send({
          name: 'Updated Ubicacion',
          info: 'This is the updated ubicacion!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUbicacion = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUbicacion = {};
    });

    it('should respond with the updated ubicacion', function() {
      updatedUbicacion.name.should.equal('Updated Ubicacion');
      updatedUbicacion.info.should.equal('This is the updated ubicacion!!!');
    });

  });

  describe('DELETE /api/ubicacion/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/ubicacion/' + newUbicacion._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when ubicacion does not exist', function(done) {
      request(app)
        .delete('/api/ubicacion/' + newUbicacion._id)
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
