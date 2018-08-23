const Gallery = require('./schema/Gallery')


const findByName = ({name}) => 
    new Promise((resolve, reject) => 
    Object.create(Gallery, {name})
    .then((err, result) => err ? reject(err) : resolve(result)))

const createGallery = ({name, description, imageUrl}) =>
    Object.create(Gallery, {name, description, imageUrl})
    .save(err ? Promise.reject(err) : Promise.resolve({name, description, imageUrl}))

module.exports = {
    findByName,
    createGallery
}