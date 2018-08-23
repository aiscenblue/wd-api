const {expect, assert} = require('chai')

const {isString, isNumber, isValidEmail} = require('../../../src/classUtils/typeValidator')

describe('# typeValidator', () => {
    describe(' # isString', () => {
        it('-> should fail validation with a object parameter', (done) => {
            expect(isString({})).to.equal(false)
            done()
        })
        it('-> should fail to have an undefined parameter', (done) => {
            expect(isString(undefined)).to.equal(false)
            done()
        })
        it('-> should pass with a string parameter', (done) => {
            expect(isString('a sample string')).to.equal(true)
            done()
        })
    })
    describe(' # isNumber', () => {
        it('-> should fail validation with a object parameter', (done) => {
            expect(isNumber({})).to.equal(false)
            done()
        })
        it('-> should fail to have an undefined parameter', (done) => {
            expect(isNumber(undefined)).to.equal(false)
            done()
        })
        it('-> should pass with a number parameter', (done) => {
            expect(isNumber(123)).to.equal(true)
            done()
        })
    })

    describe(' # isValidEmail', () => {
        it('-> should return true is email is valid', (done) => {
            expect(isValidEmail('mockemailShouldBeTrue@mail.com')).to.equal(true)
            done()
        })
        it('-> should return false with invalid email', (done) => {
            expect(isValidEmail('invalidmockEmail')).to.equal(false)
            done()
        })
    })
})