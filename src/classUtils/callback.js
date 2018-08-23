module.exports.Callback = (error, result) => 
new Promise((resolve, reject) =>{
    console.log(result)
    return error ? 
    reject(error): 
    resolve(result)
})