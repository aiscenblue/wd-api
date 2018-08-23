const {ModelHandler} = require('../models/ModelHandler')
const {usersSchema} = require('./schema/usersSchema')
const mongoose = require('mongoose')
const Model = mongoose.model('Users', usersSchema)

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