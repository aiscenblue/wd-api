const {says} = require('../modules/welcome/IndexController')
const {paramChecker, Registration, Login} = require('../modules/UserController')
// const {GiftList, GiftCreate, GiftAssign} = require('../modules/GiftController')
// const {GetFile} = require('../modules/MediaController')
const restify = require('restify')
const config = require('../../config')

module.exports = (server) => {
    server.get('/', (req, res, next) => {
        res.send(says("hi"));
        return next();
    });
    server.post('/registration', 
        paramChecker, 
        Registration.isValidEmail, 
        Registration.findUserByEmail, 
        Registration.hashPassword,
        Registration.create
    )
    server.post('/login', 
        paramChecker,
        Login.findUserByEmail,
        Login.comparePassword
    )
    // server.get('/gifts', GiftList)
    // server.post('/gifts/assign', GiftAssign)
    // server.post('/gifts', GiftCreate)
    // server.get('/media', GetFile)
    server.get(/\/uploads\/?.*/, restify.plugins.serveStatic({
        directory: `${config.app_root}`
    }));
}