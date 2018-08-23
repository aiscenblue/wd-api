const bcryptjs = require('bcryptjs')

const salt = bcryptjs.genSaltSync(10)

const hash = (password) => bcryptjs.hashSync(password, salt)

const compare = (password, hashed) =>
bcryptjs.compareSync(password, hashed)

module.exports = {
    hash,
    compare
}