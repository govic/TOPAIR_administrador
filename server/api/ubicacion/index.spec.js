'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ubicacionCtrlStub = {
  index: 'ubicacionCtrl.index',
  show: 'ubicacionCtrl.show',
  create: 'ubicacionCtrl.create',
  update: 'ubicacionCtrl.update',
  destroy: 'ubicacionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ubicacionIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './ubicacion.controller': ubicacionCtrlStub
});

describe('Ubicacion API Router:', function() {

  it('should return an express router instance', function() {
    ubicacionIndex.should.equal(routerStub);
  });

  describe('GET /api/ubicacion', function() {

    it('should route to ubicacion.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ubicacionCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/ubicacion/:id', function() {

    it('should route to ubicacion.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ubicacionCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/ubicacion', function() {

    it('should route to ubicacion.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ubicacionCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/ubicacion/:id', function() {

    it('should route to ubicacion.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'ubicacionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/ubicacion/:id', function() {

    it('should route to ubicacion.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'ubicacionCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/ubicacion/:id', function() {

    it('should route to ubicacion.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ubicacionCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
