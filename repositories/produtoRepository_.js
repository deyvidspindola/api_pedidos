const ProdutoModel = require('../models/produto')

const find = async filter => {

    try{

        if(filter) {
            const produto = await ProdutoModel.findOne(filter)
            return filter(produto)
        }

        const produtos = await ProdutoModel.find()
        return filter(produtos)

    } catch (err) {

        return filter(err)

    }

}

module.exports = {find}