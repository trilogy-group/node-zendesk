//Attributes.js: Client for the zendesk API.


var util = require('util'),
  Client = require('./client').Client;

var Attributes = exports.Attributes = function (options) {
  this.jsonAPINames = ['attributes'];
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Attributes, Client);

// ######################################################## Attributes

// ====================================== Listing Attributes

Attributes.prototype.list = function (cb) {
  return this.requestAll('GET', ['routing', 'attributes'], cb);
};

// ====================================== Viewing Attributes
Attributes.prototype.show = function (attributeID, cb) {
  return this.request('GET', ['routing', 'attributes', attributeID], cb);
};

// ====================================== Creating Attributes
Attributes.prototype.create = function (attribute, cb) {
  return this.request('POST', ['routing', 'attributes'], attribute,  cb);
};

// ====================================== Updating Attributes
Attributes.prototype.update = function (attributeID, attribute, cb) {
  return this.request('PUT', ['routing', 'attributes', attributeID], attribute,  cb);
};

// ====================================== Deleting Attributes
Attributes.prototype.delete = function (attributeID, cb) {
  return this.request('DELETE', ['routing', 'attributes', attributeID],  cb);
};