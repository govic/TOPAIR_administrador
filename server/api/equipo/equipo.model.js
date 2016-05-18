'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var EquipoSchema = new Schema({
  nombre: String,
  es_activo: {
    type: Boolean,
    default: true
  },
  serie: String,
  marca: String,
  capacidad: String,
  modelo: String,
  tipo: String, 
  antiguedad: String
}, {
  timestamps: {
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_modificacion'
  }
});

module.exports = mongoose.model('Equipo', EquipoSchema);
