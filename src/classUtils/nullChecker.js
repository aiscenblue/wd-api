module.exports.nullChecker = (objState) => {
    if(objState instanceof Object) {
        const nullKeys = Object.keys(objState).filter(key => !objState[key])
        if(nullKeys.length) 
            throw new Error(`undefined key(s): ${nullKeys.map((key, index) => (index > 0 ? ` and ${key}` : key)) }`.replace(',',''))
        else return true
    } else throw new Error('parameters must be a type of object')
}