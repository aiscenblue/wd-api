// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const config = require('../../../config')

// const {expect} = chai
// chai.use(chaiHttp)

// let server = `${config.host}:${config.port}`

// describe('/gifts request', () => {
//     let page, per_page, activeData

//     before(() => {
//         page = 0
//         per_page = 15
//     })

//     it('-> create new gift', (done) => {
//         const filename = 'mockImage.png'
//         const fs = require('fs')
//         chai.request(server)
//         .post('/gifts')
//         .type('form')
//         .attach('file', fs.readFileSync(`${config.app_root}/uploads/test/${filename}`), filename)
//         .field('name', 'mock gift name')
//         .field('description', 'mock gift description')
//         .end((err, res) => {
//             if(err) expect(err).to.not.null
//             expect(res).to.have.status(200)
//             expect(res.body).to.be.an('object')
//             expect(res.body.message).to.equal("Success")
//             expect(res.body.data).to.be.a('object')
//             done()
//         })
//     })

//     it('-> get all the gifts with pagination', (done) => {
//         chai.request(server)
//         .get('/gifts')
//         .query({page, per_page})
//         .end((err, res) => {
//             expect(res).to.have.status(200)
//             expect(res.body).to.be.an('object')
//             expect(res.body.message).to.equal("Results found")
//             expect(res.body.data.docs).to.be.an('array')
//             activeData = res.body.data.docs[0]
//             done()
//         })
//     })

//     it('-> assign a gift by email', (done) => {
//         chai.request(server)
//         .post('/gifts/assign')
//         .send({id: activeData._id, email: 'mock@mail.com'})
//         .end((err, res) => {
//             if(err) expect(err).to.equal('array')
//             expect(res).to.have.status(200)
//             expect(res.body).to.be.an('object')
//             expect(res.body.message).to.equal("Success")
//             done()
//         })
//     })
// })