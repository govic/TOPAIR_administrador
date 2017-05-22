/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cliente              ->  index
 * POST    /api/cliente              ->  create
 * GET     /api/cliente/:id          ->  show
 * PUT     /api/cliente/:id          ->  update
 * DELETE  /api/cliente/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Cliente = require('./cliente.model');
var path = require('path');
var fs = require('bluebird').promisifyAll(require('fs'));
var s3 = require('../../s3/s3.service');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    console.dir(err);
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    //fix: merge no sobreescribe este campo
    updated.correos = updates.correos;
    //fix: entity.save no encuentra cambios en array de string
    //se marca el campo como modificado para que haga cambios
    updated.markModified('correos');
    return updated.saveAsync().spread(function(data) {
      return data;
    });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Clientes
exports.index = function(req, res) {
  Cliente.find()
    .sort('-es_activo nombre')
    .exec()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

exports.activos = function(req, res) {
  Cliente.find({ es_activo: true })
    .sort('nombre')
    .exec()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Cliente from the DB
exports.show = function(req, res) {
  Cliente.findById(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Cliente in the DB
exports.create = function(req, res) {
  Cliente.createAsync(req.body)
    .then(function(entity) {
      if (req.body.logo) {
        return s3.uploadImage('logo_cliente_' + entity._id + '.jpg', req.body.logo).then(function() {
          return entity;
        });
      }
      return entity;
    })
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Cliente in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Cliente.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(function(entity) {
      if (req.body.logo) {
        return s3.uploadImage('logo_cliente_' + entity._id + '.jpg', req.body.logo).then(function() {
          return entity;
        });
      }
      return entity;
    })
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Cliente from the DB
exports.destroy = function(req, res) {
  Cliente.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
