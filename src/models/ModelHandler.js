const ModelHandler = (Model) => 
(args) => ({
    find: () => Model.find(args),
    findOne: () =>  new Promise((resolve, reject) => 
                        Model.findOne(args, (err, doc) => 
                        err ? reject(err): resolve(doc))
                    ),
    create: () => new Promise((resolve, reject) => 
                    Model.create(args, (err, doc) => 
                    err ? reject(err): resolve(doc))
                ),
    remove: () => 
            Model.remove(args, (err) => 
            new Promise((resolve, reject) => 
            err ? reject(err) : resolve(true)))
})

module.exports = {
    ModelHandler
}