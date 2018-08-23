const {should, expect, assert} = require('chai');
const usersJson = require('./users.json')

const {says, getUserById} = require('../../../../src/modules/welcome/IndexController');

describe('# welcome module', () => {
    it('-> says a message', (done) => {
        const message = "hi to all"
        expect(says(message)).to.equal(`welcome message: ${message}`)
        done()
    })
})