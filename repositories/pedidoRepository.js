import { PedidoModel } from '../models/pedido'

const get = async search => {

    try{

        if(search != null) {
            return await PedidoModel.find(search).exec()
        }

        return await PedidoModel.find()

    } catch (err) {
        
        throw new Error(err)

    }

}

const getById = async orderId => {

    try{

        if(!orderId)
            throw new Error('Informe o id do Pedido!')

        return await PedidoModel.findById(orderId).exec()

    } catch (err) {
        
        throw new Error(err)

    }

}

const create = async data => {

    try {

        return await PedidoModel.create(data)

    } catch (err) {

        throw new Error(err)

    }

}

const update = async (orderId, data) => {

    try {

        return await PedidoModel.findByIdAndUpdate(orderId, data, {new: true})

    } catch (err) {

        throw new Error(err)

    }

}

const destroy = async orderId => {

    try {

        await PedidoModel.findByIdAndDelete(orderId)

    } catch (err) {

        throw new Error(err)

    }

}

module.exports = {get, getById, create, update, destroy}