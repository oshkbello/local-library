const Author = require('../models/author');

exports.author_list = function(re, res) {
  res.send('NOT IMPLEMENTED: Author list');
};

exports.author_details = function(req, res) {
  res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

exports.author_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

exports.author_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

exports.author_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

exports.author_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

exports.author_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

exports.author_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};