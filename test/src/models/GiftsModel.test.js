const {expect} = require('chai');
const {create, remove, findOne, find} = require('../../../src/models/GiftsModel')
const config = require('../../../config')
const mongoose = require('mongoose')

mongoose.connect(config.db.uri);


describe('# GiftsModel', () => {
    it('-> create', (done) => {
        create({
            name: "mock name",
            description: "mock description",
            imageUrl: "MockImage.url"
        })
        .then(gift => expect(gift).to.be.an('object'))
        .then(() => done())
    })

    it('-> find ', (done) => {
        find({name: "mock name"})
        .then(gift => expect(gift).to.be.an('array'))
        .then(() => done())
    })

    it('-> findOne ', (done) => {
        findOne({name: "mock name"})
        .then(gift => expect(gift).to.be.an('object'))
        .then(() => done())
    })

    it('-> remove', (done) => {
        remove({name: "mock name"})
        .then(gift => expect(gift).to.be.an('object'))
        .then(() => done())
    })

})