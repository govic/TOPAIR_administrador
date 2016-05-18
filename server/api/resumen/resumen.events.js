/**
 * Resumen model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Resumen = require('./resumen.model');
var ResumenEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ResumenEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Resumen.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ResumenEvents.emit(event + ':' + doc._id, doc);
    ResumenEvents.emit(event, doc);
  }
}

module.exports = ResumenEvents;
