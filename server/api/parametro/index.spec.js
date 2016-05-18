'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var parametroCtrlStub = {
  index: 'parametroCtrl.index',
  show: 'parametroCtrl.show',
  create: 'parametroCtrl.create',
  update: 'parametroCtrl.update',
  destroy: 'parametroCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var parametroIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './parametro.controller': parametroCtrlStub
});

describe('Parametro API Router:', function() {

  it('should return an express router instance', function() {
    parametroIndex.should.equal(routerStub);
  });

  describe('GET /api/parametro', function() {

    it('should route to parametro.controller.index', function() {
      routerStub.get
        .withArgs('/', 'parametroCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/parametro/:id', function() {

    it('should route to parametro.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'parametroCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/parametro', function() {

    it('should route to parametro.controller.create', function() {
      routerStub.post
        .withArgs('/', 'parametroCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/parametro/:id', function() {

    it('should route to parametro.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'parametroCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/parametro/:id', function() {

    it('should route to parametro.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'parametroCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/parametro/:id', function() {

    it('should route to parametro.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'parametroCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
