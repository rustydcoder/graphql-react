const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
   name: String,
   genre: String,
   authorId: String
})

const Book = model('book', BookSchema)

module.exports = Book