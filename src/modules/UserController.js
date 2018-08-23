const UserModel = require('../models/UserModel')
const {nullChecker} = require('../classUtils/nullChecker')
const {isValidEmail} = require('../classUtils/typeValidator')
const {hash, compare} = require('../classUtils/hasher')

const paramChecker = (req, res, next) => {
    try {
        nullChecker({...req.body})
    } catch(error) {
        res.send(500, {message: error.message})
        next(false)
    }
}

const Registration = {
    isValidEmail: (req, res, next) => {
        if(!isValidEmail(req.body.email)) {
            res.send(500, {message: "Invalid email format"})
            next(false)
        } else {
            next()
        }
    },
    findUserByEmail: (req, res, next) => {
        UserModel.findOne({email: req.body.email})
        .then(user => user ? Promise.reject(`Email ${email} already exist!`) : false )
        .catch(message => res.send(500, message))
        .catch(() => next(false))
        .then(() => next())
    },
    hashPassword: (req, res, next) => {
        req.body.password = hash(req.body.password)
        next()
    },
    create: (req, res, next) => {
        UserModel.create(req.body)
        .then(user => res.send(200, {data: user, message: "Successfully registered"}))
        .then(() => next())
        .catch(() => next(false))
    }
}

const Login = {
    comparePassword: (req, res, next) => {
        if(compare(req.body.password, req.data.password)) {
            res.send({message: "Authentication failed"})
            res.next(false)
        } else {
            res.send({message: "Authenticated"})
            next()
        }
    },
    findUserByEmail: (req, res, next) => {
        UserModel.findOne({email: req.body.email})
        .then(data => data ? data : Promise.reject("Authentication failed"))
        .then(data => res.send({data}))
        .catch(message => res.send(500, {message}))
        .then(() => next())
        .catch(() => next(false))
    }
}

module.exports = {
    paramChecker,
    Registration,
    Login
}