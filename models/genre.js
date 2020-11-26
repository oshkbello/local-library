const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let GenreSchema = new Schema({
  name: { type: String, required: true, maxlength:100, minlength:3 }
});

//virtual for genre url

GenreSchema.virtual('url').get(function () {
  return '/catalog/bookinstance/' + this._id;
});

//export module
module.exports = mongoose.model('GenreSchema', GenreSchema);