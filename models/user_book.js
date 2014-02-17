var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    UserBookSchema = new Schema({
        userId: ObjectId,
        books: [{
            bookId: ObjectId,
            addTime: {
                type: Date,
                default: Date.now
            }
        }]
    })

    mongoose.model('UserBook', UserBookSchema)
