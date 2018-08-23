const {ModelHandler} = require('../models/ModelHandler')
const {giftsSchema} = require('./schema/giftsSchema')
const mongoose = require('mongoose')
const Model = mongoose.model('Gifts', giftsSchema)

const modelHandler = ModelHandler(Model)

const create = (args) => modelHandler(args).create()
const find = (args) => modelHandler(args).find()
const findOne = (args) => modelHandler(args).findOne()
const remove = (args) => modelHandler(args).remove()


module.exports = {
    create,
    find,
    findOne,
    remove
}