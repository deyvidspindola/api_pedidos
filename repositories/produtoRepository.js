import { ProdutoModel } from '../models/produto'

const get = async search => {

    try{

        if(search != null) {
            return await ProdutoModel.find(search).exec()
        }

        return await ProdutoModel.find()

    } catch (err) {
        
        throw new Error(err)

    }

}

const getById = async productId => {

    try{

        if(!productId)
            throw Error('Informe o id do Produto!')

        return await ProdutoModel.findById(productId).exec()

    } catch (err) {
        
        throw new Error(err)

    }

}

const create = async data => {

    try {

        return await ProdutoModel.create(data)

    } catch (err) {

        throw new Error(err)

    }

}

const update = async (productId, data) => {

    try {

        if(await checkIfHasProduct(productId))
            return await ProdutoModel.findByIdAndUpdate(productId, data, {new: true})

    } catch (err) {

        throw new Error(err)

    }

}

const destroy = async productId => {

    try {

        await ProdutoModel.findByIdAndDelete(productId)

    } catch (err) {

        throw new Error(err)

    }

}

module.exports = {get, getById, create, update, destroy}