const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const schema = new mongoose.Schema({
    imageUrl: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    deletedAt: {type: Date, default: null}
})

schema.plugin(mongoosePaginate)

module.exports = mongoose.model('Gallery', schema)