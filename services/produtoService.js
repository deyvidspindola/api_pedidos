const produtoRepository = require('../repositories/produtoRepository')

const get = async search => {

    try {
        
        search = filter(search)
        return await produtoRepository.get(search)

    } catch (err) {
        
        throw new Error(err)

    }

}

const getById = async productId => {

    try {
        
        return await produtoRepository.getById(productId)

    } catch (err) {
        
        throw new Error(err)

    }

}

const create = async data => {

    try {

        return await produtoRepository.create(data)

    } catch (err) {

        throw new Error(err)

    }

}

const update = async (productId, data) => {

    try {

        if(await checkIfHasProduct(productId))
            return await produtoRepository.update(productId, data)

    } catch (err) {

        throw new Error(err)

    }

}

const destroy = async productId => {

    try {

        if(await checkIfHasProduct(productId))
            await produtoRepository.destroy(productId)

    } catch (err) {

        throw new Error(err)

    }

}

const filter = search => {

    if (search != null) {

        const arr = search.split('=')
        return { [arr[1]] : arr[0] }

    }

    return null

}

const checkIfHasProduct = async productId => {

    const hasProduct = await produtoRepository.getById(productId)
    if (!hasProduct)
        throw new Error('Produto não encontrado!')

    return true

}

module.exports = {get, getById, create, update, destroy}