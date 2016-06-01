/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
//var Proyecto = require('../api/proyecto/proyecto.model');
// var Cliente = require('../api/cliente/cliente.model');
var TipoEquipo = require('../api/tipoequipo/tipoequipo.model');
var TipoTrabajo = require('../api/tipotrabajo/tipotrabajo.model');
var Resumen = require('../api/resumen/resumen.model');

/*Resumen.update({}, {creador:'573e4629b0ca07d822cecb6e'} , {multi: true}, function(err, docs) {
  console.dir(err || docs);
});*/

/*TipoEquipo.find({}).removeAsync().then(function() {
  TipoEquipo.createAsync({ nombre: 'CAJAS RECUPERADORAS' })
    .then(function(entity) {
      return TipoTrabajo.createAsync([
        { nombre: 'Chequeo Funcionamiento' },
        { nombre: 'Verificar conexión Eléctrica' },
        { nombre: 'Reapreté conexión Eléctrica' },
        { nombre: 'Verificar aislaciones cañerías' },
        { nombre: 'Confección informe completo unidad' }
      ]).then(function(data) {
        entity.trabajos = data;
        return entity.saveAsync().spread(function(saved) {
          return saved;
        });
      });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'AEROTERMOS' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Verificar estado de resistencias calefactoras' },
            { nombre: 'Verificar estado de ventiladores' },
            { nombre: 'Limpieza de serpentín' },
            { nombre: 'Verificar estado de circuito de fuerza y control' },
            { nombre: 'Verificar termostato de temperatura' },
            { nombre: 'Medición de parámetros, consumo, temperatura, caudal de aire' },
            { nombre: 'Entrega de informe técnico' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        })
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'COMPACTOS' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Desmontaje parcial de Pizas y Gabinete' },
            { nombre: 'Lavado de serpentines unidad condensadora y evaporadora' },
            { nombre: 'Peinado de aletas unidad condensadora' },
            { nombre: 'Verificación estado del desagüe' },
            { nombre: 'Lavado de filtro de retorno' },
            { nombre: 'Limpieza de contactores ' },
            { nombre: 'Reapriete de terminales de control y fuerza' },
            { nombre: 'Verificación de estado de rodamientos de ventiladores unidad' },
            { nombre: 'Verificar estado de los descansos del ventilador de inyección' },
            { nombre: 'Medición de parámetros tales como temperatura, presión, consumo, caudal' },
            { nombre: 'Confección Informe Completo de la unidad.' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        })
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'DAMPERS' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Verificar actuador de compuerta' },
            { nombre: 'Verificar estado de láminas de la compuerta (alabes)' },
            { nombre: 'Verificar sistema de   Fuerza y control' },
            { nombre: 'Verificar operación de termostato' },
            { nombre: 'Reapretar terminales de fuerza y control' },
            { nombre: 'Entrega de informe técnico' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'REFRIGERACION' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Lavado de serpentín unidad condensadora' },
            { nombre: 'Verificar estado de ventiladores unidad evaporadora' },
            { nombre: 'Verificar desagüe unidad evaporadora' },
            { nombre: 'Verificar sistema de control (termostato)' },
            { nombre: 'Reapretar terminales de fuerza y control' },
            { nombre: 'Verificar estado de resistencia calefactora de la línea de desagüe' },
            { nombre: 'Medición de parámetros, presión, temperatura, caudal, consumo' },
            { nombre: 'Entrega de informe técnico' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'SPLIT - EVAPORADORA' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Desmontaje parcial de piezas y gabinete' },
            { nombre: 'Lavado de serpentín tubo y aletas por convección forzada' },
            { nombre: 'Lubricación de motor ventilador y limpieza de alavés' },
            { nombre: 'Chequeo drenaje líneas de desagües' },
            { nombre: 'Revisión de funcionamiento de termostato o control remoto, secuencia de accionamiento' },
            { nombre: 'Lubricación de rodamientos, bujes de motor eléctrico, y en general partes móviles del equipo' },
            { nombre: 'Chequeo de ruidos anormales en el sistema' },
            { nombre: 'Revisión de flujos de aire de inyección para el ciclo de calefacción y enfriamiento' },
            { nombre: 'Medición y registro de corrientes y voltajes ' },
            { nombre: 'Medición de temperaturas de inyección y ambiente' },
            { nombre: 'Reapriete de terminales eléctricos de fuerza y control' },
            { nombre: 'Chequeo de aislación de tuberías de refrigeración ' },
            { nombre: 'Confección Informe Completo Unidad' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'SPLIT - CONDENSADORAS ' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Desarme parcial de piezas y gabinetes' },
            { nombre: 'Chequeo general unidad condensadora' },
            { nombre: 'Lavado a alta presión de condensador tipo espiral, con detergente Industrial' },
            { nombre: 'Lubricación eje motor axial de ventilación y limpieza de aletas' },
            { nombre: 'Regulación de presiones y chequeo de carga refrigerante circuito alta y baja presión' },
            { nombre: 'Verificación aislación de red tuberías de refrigeración' },
            { nombre: 'Chequeo de estado circuito eléctrico de fuerza y control' },
            { nombre: 'Medición y registro de corrientes y voltajes ' },
            { nombre: 'Medición de temperaturas de condensación' },
            { nombre: 'Regulación de dispositivos de seguridad' },
            { nombre: 'Confección Informe Completo Unidad' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'VENTANA' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Desmontar unidad' },
            { nombre: 'Lavado de serpentín' },
            { nombre: 'Reapriete de contactos de fuerza y control' },
            { nombre: 'Montaje de unidad' },
            { nombre: 'Mediciones de parámetros, temperatura, consumo y caudal' },
            { nombre: 'Entrega de informe técnico' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'EXTRACTORAS E INYECTORAS' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Limpieza de Motor' },
            { nombre: 'Revisión de Bujes o Rodamientos de Motor' },
            { nombre: 'Verificar correcto  sentido de giro' },
            { nombre: 'Verificar estado de alabes o aspas' },
            { nombre: 'Verificar fijación de Extractor' },
            { nombre: 'Lavado de filtro de Aire' },
            { nombre: 'Cambio de filtro si es necesario' },
            { nombre: 'Limpieza de turbinas' },
            { nombre: 'Limpieza de estructura' },
            { nombre: 'Verificar estado de soportes' },
            { nombre: 'Chequeo visual de ductos en cubierta' },
            { nombre: 'Verificar parámetros de tensión y corriente' },
            { nombre: 'Confección informe completo unidad' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'CONDENSADORAS VRV' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Desarme Unidad Condensadora' },
            { nombre: 'Lavado de serpentín' },
            { nombre: 'Lavado de piezas Móviles' },
            { nombre: 'Peinado serpentines' },
            { nombre: 'Limpieza de motores Ventiladores' },
            { nombre: 'Limpieza de aspas' },
            { nombre: 'Chequeo fijación de Motores' },
            { nombre: 'Revisión de bujes o rodamientos de motores' },
            { nombre: 'Verificación funcionamiento de circuito de fuerza y control ' },
            { nombre: 'Verificación conexión de refrigeración' },
            { nombre: 'Verificar posibles fugas de  refrigerante' },
            { nombre: 'Verificar presión de trabajo ' },
            { nombre: 'Verificar estado de soportes' },
            { nombre: 'Verificar correcta secuencia de  fases' },
            { nombre: 'Verificar parámetros de tensión y energía' },
            { nombre: 'Verificar Funcionamiento compresor' },
            { nombre: 'Verificar Funcionamiento ventiladores' },
            { nombre: 'Eliminar posibles ruidos producto de vibraciones' },
            { nombre: 'Confección Informe completo por unidad' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    })
    .then(function(entity) {
      return TipoEquipo.createAsync({ nombre: 'EVAPORADORAS VRV' })
        .then(function(entity) {
          return TipoTrabajo.createAsync([
            { nombre: 'Limpieza de unidad evaporadora' },
            { nombre: 'Lavado filtro de aire' },
            { nombre: 'Lavado serpentín' },
            { nombre: 'Limpieza de bandeja de condensado' },
            { nombre: 'Chequeo fijación de motor' },
            { nombre: 'Revisión de bujes o rodamientos de motores' },
            { nombre: 'Verificación conexión de refrigeración' },
            { nombre: 'Verificar posibles fugas de  refrigerante' },
            { nombre: 'Verificar Funcionamiento ventilador' },
            { nombre: 'Eliminar posibles ruidos producto de vibraciones' },
            { nombre: 'Verificar Lógica de control' },
            { nombre: 'Verificar parámetros de tensión y corriente' },
            { nombre: 'Confección Informe completo por unidad' }
          ]).then(function(data) {
            entity.trabajos = data;
            return entity.saveAsync().spread(function(saved) {
              return saved;
            });
          });
        });
    });
});*/


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



/*User.find({}).removeAsync().then(function() {
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
