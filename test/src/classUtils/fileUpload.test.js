const {expect} = require('chai')
const fileUpload = require('../../../src/classUtils/fileUpload')

const {isImageValidated, readFileUpload, writeFileUpload, uploadFile} = fileUpload

describe('# uploadFile', () => {
    let fileParams, storeTo, encoding

    beforeEach(() => {
        fileParams = Object.create({
            name: 'mockImage.png',
            path: './uploads/test/mockImage.png'
        })
        encoding = 'binary'
        storeTo = './uploads'
    })
    afterEach(() => {
        fileParams = undefined
        storeTo = undefined
    })

    describe('# isImageValidated', () => {
        it('-> should return boolean if image is valid', () => {
            expect(isImageValidated('fakefile.jpg')).to.equal(true)
        })
        it('-> should return boolean if image is valid', () => {
            expect(isImageValidated('fakefile')).to.equal(false)
        })
    })

    describe('# readFileUpload', () => {
        it('reads a file from a path', async () => {
            const binaryFile = await readFileUpload({filePath: fileParams.path}, encoding)
            expect(binaryFile).to.not.null
        })
        it('-> should return an error', async () => {
            try {
                await readFileUpload({filePath: './not/a/location'})
            } catch (error) {expect(error.message).to.not.null}
        })
    })

    describe('# writeFileUpload', () => {
        it('writes a file from a readFile promise data', async () => {
            const wf = await writeFileUpload({storeTo, name: fileParams.name})
            expect(wf).to.be.an('object')
            expect(wf.filename).to.equal(fileParams.name)
        })
        it('-> should return an error', async () => {
            try {
                await writeFileUpload({})
            } catch (error) {expect(error.message).to.not.null}
        })
    })

    describe('# uploadFile', () => {
        it('-> uploads the file successfully', async () => {
            const uploadedFileData = await uploadFile({file: fileParams, storeTo})
            expect(uploadedFileData).to.be.an('object')
            expect(uploadedFileData.filename).to.equal(fileParams.name)
        })
    })

})