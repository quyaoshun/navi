var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    BookCollectSchema = new Schema({
        userId: {
            type: ObjectId,
            index: true
        },
        bookId: {
            type: ObjectId
        },
        addTime: {
            type: Date,
            default: Date.now
        }
    })

mongoose.model('BookCollect', BookCollectSchema)
