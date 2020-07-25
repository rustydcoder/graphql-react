const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
   name: String,
   age: Number,
})

const Author = model('author', AuthorSchema)

module.exports = Author