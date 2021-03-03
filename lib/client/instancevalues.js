//InstanceValues.js: Client for the zendesk API.


var util = require('util'),
  Client = require('./client').Client;

var InstanceValues = exports.InstanceValues = function (options) {
  this.jsonAPINames = ['instance_values'];
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(InstanceValues, Client);

// ######################################################## Instance Values

// ====================================== New Incremental Instance Values Export

InstanceValues.prototype.incremental = function (startTime, cb) {
  return this.requestAll('GET', ['incremental', 'routing', 'instance_values', { start_time: startTime }], cb);
};
