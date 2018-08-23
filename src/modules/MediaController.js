const {readFileUpload} = require('../../src/classUtils/fileUpload')
const config = require('../../config')

const GetFile = async (req, res, next) => {
    try {
        const file = await readFileUpload({filePath: `${config.app_root}/uploads/${req.query.path}`}, encoding='base64')
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(`data:image/png;base64,${file}`);
        res.end();
    } catch(error) {
        res.send({message: error.message})
    }
    
    next()
}

module.exports = {
    GetFile
}