'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var resumenCtrlStub = {
  index: 'resumenCtrl.index',
  show: 'resumenCtrl.show',
  create: 'resumenCtrl.create',
  update: 'resumenCtrl.update',
  destroy: 'resumenCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var resumenIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './resumen.controller': resumenCtrlStub
});

describe('Resumen API Router:', function() {

  it('should return an express router instance', function() {
    resumenIndex.should.equal(routerStub);
  });

  describe('GET /api/resumen', function() {

    it('should route to resumen.controller.index', function() {
      routerStub.get
        .withArgs('/', 'resumenCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/resumen/:id', function() {

    it('should route to resumen.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'resumenCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/resumen', function() {

    it('should route to resumen.controller.create', function() {
      routerStub.post
        .withArgs('/', 'resumenCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/resumen/:id', function() {

    it('should route to resumen.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'resumenCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/resumen/:id', function() {

    it('should route to resumen.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'resumenCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/resumen/:id', function() {

    it('should route to resumen.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'resumenCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
