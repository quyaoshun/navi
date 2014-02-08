var mongoose = require('mongoose'),
    Book = require('./book').Book,
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    UserBookSchema = new Schema({
        userId: ObjectId,
        books: [Book]
    })

    mongoose.model('UserBook', UserBookSchema)
