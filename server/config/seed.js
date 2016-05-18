/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
//var Proyecto = require('../api/proyecto/proyecto.model');
// var Cliente = require('../api/cliente/cliente.model');

/*Cliente.createAsync({
  nombre: 'Enjoy'
}, {
  nombre: 'Fresenius'
},{
  nombre: 'Trussup'
},{
  nombre: 'Banco Falabella'
},{
  nombre: 'FerroGroup'
},{
  nombre: 'CVV'
},{
  nombre: 'Carpas Triciklo'
},{
  nombre: 'Besalco'
},{
  nombre: 'Eventos WSA'
},{
  nombre: 'Producciones Banana'
},{
  nombre: 'Open Hotel'
},{
  nombre: 'DFV'
},{
  nombre: 'UDLA'
},{
  nombre: 'Baby Infanti Store'
},{
  nombre: 'Ate Producciones'
},{
  nombre: 'Almagro'
},{
  nombre: 'Teletón'
},{
  nombre: 'Ripley'
},{
  nombre: 'Tango Uno'
},{
  nombre: 'Esencia Staff'
}).then(function(){
	console.log('clientes creados');
});*/


/*
User.find({}).removeAsync().then(function() {
  User.createAsync({
    provider: 'local',
    name: 'Administrador',
    email: 'admin',
    password: '123456a',
    role: 'admin'
  }).then(function() {
    console.log('usuarios creados OK! ---------');
  });
});*/
