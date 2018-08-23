const {expect} = require('chai');
const {create, remove, findOne, find} = require('../../../src/models/UserModel')
const config = require('../../../config')
const mongoose = require('mongoose')

mongoose.connect(config.db.uri);


describe('# UserModel', () => {
    it('-> create', (done) => {
        create({
            firstName: "mock first",
            lastName: "mock last",
            email: "mock@mail.com",
            password: "mockPassword"
        })
        .then(user => expect(user).to.be.an('object'))
        .then(() => done())
    })

    it('-> find ', (done) => {
        find({email: "mock@mail.com"})
        .then(user => expect(user).to.be.an('array'))
        .then(() => done())
    })

    it('-> findOne ', (done) => {
        findOne({email: "mock@mail.com"})
        .then(user => expect(user).to.be.an('object'))
        .then(() => done())
    })

    it('-> remove', (done) => {
        remove({email: "mock@mail.com"})
        .then(user => expect(user).to.be.an('object'))
        .then(() => done())
    })

})