const { Schema, model } = require('mongoose');

const AuthorSchema = new Schema({
   name: String,
   age: Number,
   bookId: String
})

const Author = model('author', AuthorSchema)

module.exports = Author