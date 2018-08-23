const fs = require('fs')

const isImageValidated = (filename) => (/\.(gif|jpg|jpeg|tiff|png)$/i).test(filename)

const readFileUpload = ({filePath}, encoding = 'binary') => new Promise((resolve, reject) => {
    fs.readFile(filePath, {encoding}, (err, data)=> {
        if(err) reject(err)
        resolve(data)
    });
})

const writeFileUpload = ({storeTo, name, data, encoding}) => new Promise((resolve, reject) => {
    fs.writeFile(`${storeTo}/${name}`, data, encoding, (err) => {
        if(err) reject(err)
        resolve({filename: name, content: data})
    })
})

const uploadFile = async ({file, storeTo}, encoding = 'binary') => {
    const {path, name} = file
    const fsData = await readFileUpload({filePath: path})
    const fsWriteData = await writeFileUpload({storeTo, name, data: fsData, encoding})
    return fsWriteData
}

module.exports = {
    isImageValidated,
    readFileUpload,
    writeFileUpload,
    uploadFile
}