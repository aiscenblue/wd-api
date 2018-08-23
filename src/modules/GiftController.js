const {findAllGifts, findGiftByName, createGift, findGiftById, assignGift} = require('../models/GiftsModel')
const {isImageValidated, uploadFile} = require('../classUtils/fileUpload')
const {nullChecker} = require('../classUtils/nullChecker')
const {isValidEmail} = require('../classUtils/typeValidator')

const GiftList = async (req, res, next) => {
    let data, message
    try {
        const {page, per_page} = req.query
        const areChecked = nullChecker({page, per_page})
        if(areChecked) {
            data = await findAllGifts({page: parseInt(page), per_page: parseInt(per_page)})
            message = "Results found"
        }
    } catch (error) {
        message = error.message
    }

    res.send({data, message})
    next()
}

const GiftCreate = async (req, res, next) => {
    let data, message
    const {name, description} = req.body
    const giftFound = await findGiftByName({name})
    
    try {
        if(giftFound) throw new Error(`Gift: ${name} already exist`)
        if(!isImageValidated) throw new Error("Invalid image format") 
        const areChecked = nullChecker({name, description, file: req.files.file})
        if(areChecked) {
            const file = await uploadFile({file: req.files.file, storeTo: './uploads/gifts'})
            const giftResult = await createGift({name, description, imageUrl: file.filename})
            data = Object.assign({}, giftResult)
            message = "Success"
        }
    } catch(error) {message = error.message}
    res.send({data, message})
    next()
}

const GiftAssign = async (req, res, next) => {
    let message, data
    const {id, email} = req.body
    try {
        if(!isValidEmail(email)) throw new Error("Invalid email format")
        const areChecked = nullChecker({id, email})
        if(areChecked) {
            const giftFound = await findGiftById({id})
            const giftAssigned = await assignGift({id, email})
            data = giftFound
            message = "Success"
        }
    } catch(error) {
        message = error.message
    }
    res.send({data, message})
    next()
}

module.exports = {
    GiftList,
    GiftCreate,
    GiftAssign
}