//AttributeValues.js: Client for the zendesk API.


var util = require('util'),
  Client = require('./client').Client;

var AttributeValues = exports.AttributeValues = function (options) {
  this.jsonAPINames = ['attribute_values'];
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(AttributeValues, Client);

// ######################################################## Attribute Values

// ====================================== Listing Instance Values

AttributeValues.prototype.listByAgent = function (userID, cb) {
  return this.requestAll('GET', ['routing', 'agents', userID, 'instance_values'], cb);
};

AttributeValues.prototype.listByTicket = function (ticketID, cb) {
  return this.requestAll('GET', ['routing', 'tickets', ticketID, 'instance_values'], cb);
};

AttributeValues.prototype.listByAttribute = function (attributeID, cb) {
  return this.requestAll('GET', ['routing', 'attributes', attributeID, 'values'], cb);
};

// ====================================== Creating Instance Values

AttributeValues.prototype.createByAgent = function (userID, instanceValues, cb) {
  return this.request('POST', ['routing', 'agents', userID, 'instance_values'], instanceValues, cb);
};

AttributeValues.prototype.createByTicket = function (ticketID, instanceValues, cb) {
  return this.request('POST', ['routing', 'tickets', ticketID, 'instance_values'], instanceValues, cb);
};
