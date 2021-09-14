const produtoRepository = require('../repositories/produtoRepository')

const all = async param => {

    try {
        
        param = makeParam(param)
        return await produtoRepository.find(param)

    } catch (err) {
        
        throw new Error(err)

    }

}

const filter = (find, findName) => {
    return { [findName] : find }
}

const makeParam = param => {
    console.log(param)
    if(param != null){
        const value = param.split('=')
        return filter(value[1], value[0])
    }
    return null
}

module.exports = {all}