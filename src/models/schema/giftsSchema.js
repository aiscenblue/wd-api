const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');

const giftsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    owner: {type: String, required: false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: Date
})
giftsSchema.plugin(mongoosePaginate);

module.exports = {
    giftsSchema
}