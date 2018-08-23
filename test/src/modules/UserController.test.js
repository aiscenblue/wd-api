// const chai = require('chai')
// const chaiHttp = require('chai-http');
// const config = require('../../../config')

// const UserModel = require('../../../src/models/UserModel')

// const  {expect} = chai

// chai.use(chaiHttp)
// let server = `${config.host}:${config.port}`



// describe('# UserController HTTP Testing', () => {
//     let requestParams, addedParams
        
//     beforeEach(() => {
//         requestParams = {
//             email: "mock@mail.com",
//             password: "theStrongestPassword"
//         }
//         addedParams = {
//             firstName: "Mock First name",
//             lastName: "Mock Last Name"
//         }
//     })
//     after(() => {
//         UserModel.remove({email: requestParams.email})
//     })
    
//     describe('/POST registration', () => {
        
//         it('-> validate missing parameter: firstName and lastName', (done) => {
//             expect(requestParams).to.be.an('object')
//             chai.request(server)
//             .post('/registration')
//             .send(requestParams)
//             .end((err, res) => {
//                 expect(res).to.be.an('object')
//                 expect(res).to.have.status(500)
//                 expect(res.body.message).to.equal("undefined key(s): firstName and lastName")
//                 done()
//             })
//         })
//         it('-> should register a new user', (done) => {
//             chai.request(server)
//             .post('/registration')
//             .send(Object.assign(requestParams, addedParams))
//             .end((err, res) => {
//                 expect(res).to.have.status(200)
//                 expect(res.body).to.be.an('object')
//                 expect(res.body.message).to.equal("Successfully registered!")
//                 expect(res.body.data).to.be.an('object')
//                 expect(Object.keys(res.body.data)).have.length(4)
//                 expect(res.body.data.password).not.to.equal(requestParams.password)
//                 done()
//             })
//         })
//         it('-> should validate that email is already registered', (done) => {
//             chai.request(server)
//             .post('/registration')
//             .send(Object.assign(requestParams, addedParams))
//             .end((err, res) => {
//                 expect(res).to.have.status(500)
//                 expect(res.body.message).to.equal("Email mock@mail.com already exist!")
//                 done()
//             })
//         })
//     });

//     describe('/POST login', () => {
//         it('-> login mock email', (done) => {
//             chai.request(server)
//             .post('/login')
//             .send(requestParams)
//             .end((err, res) => {
//                 expect(res).to.have.status(200)
//                 expect(res.body.data).to.be.an('object')
//                 expect(res.body.message).to.equal('Authenticated!')
//                 done()
//             })
//         })
//         it('-> login mock email should fail with wrong password', (done) => {
//             chai.request(server)
//             .post('/login')
//             .send(Object.assign(requestParams, {password: 'wrongPassword'}))
//             .end((err, res) => {
//                 expect(res).to.have.status(500)
//                 expect(res.body.message).to.equal('Authentication failed!')
//                 done()
//             })
//         })
//     })

// })