const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: { type: String, required: true, minlength: [3, 'Less than 3 letter'], maxlength: [100, 'More than 100']}
});

//virtual for genre url
GenreSchema.virtual('url').get(function () {
  return '/catalog/genre/' + this._id;
});

//export module
module.exports = mongoose.model('Genre', GenreSchema);