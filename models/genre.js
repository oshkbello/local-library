const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: { type: String, required: true }
});

//virtual for genre url
GenreSchema.virtual('url').get(function () {
  return '/catalog/genre/' + this._id;
});

//export module
module.exports = mongoose.model('Genre', GenreSchema);