import { ProdutoModel } from '../models/produto'

const find = async filter => {

    try{

        if(filter != null) {
            return await ProdutoModel.findOne(filter)
        }

        return await ProdutoModel.find()

    } catch (err) {
        
        throw new Error(err)

    }

}

module.exports = {find}