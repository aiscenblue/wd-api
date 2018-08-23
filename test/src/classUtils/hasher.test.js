const {hash, compare} = require('../../../src/classUtils/hasher')
const {expect} = require('chai')

describe('# hasher', () => {
    let hashedPassword

    it('-> hash password', (done) => {
        hashedPassword = hash("password")
        expect(hashedPassword).to.be.a('string')
        done()
    })

    it('-> compare password', (done) => {
        expect(hashedPassword).to.not.null
        const result = compare("password", hashedPassword)
        expect(result).to.equal(true)
        done()
    })

})