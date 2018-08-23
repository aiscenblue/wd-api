const {assert, expect} = require('chai')
const {nullChecker} = require('../../../src/classUtils/nullChecker')

describe('# nullChecker()', () => {
    before(() => {
        userParams = {
            firstname: "Jeffrey Marvin",
            lastName: "Forones"
        }
    })
    it(' -> returns true', (done) => {
        expect(nullChecker(userParams)).to.equal(true)
        done()
    })
    it('throws an error by passing a non object type parameter', (done) => {
        try {
            nullChecker('stringParamAndNOTAnObject')
        } catch(error) {
            expect(error.message).to.equal('parameters must be a type of object')
        }
        done()
    })
    it(' -> throws an error by assigning undefined or null value', (done) => {
        try {
            nullChecker(Object.assign(userParams, {lastName: undefined, email: null}))
        } catch(error) {
            expect(error.message).equal('undefined key(s): lastName and email')
        }
        done()
    })
})