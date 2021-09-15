const pedidoRepository = require('../repositories/pedidoRepository')
const productService = require('../services/produtoService')

const get = async search => {

    try {
        
        search = filter(search)
        return await pedidoRepository.get(search)

    } catch (err) {
        
        throw new Error(err)

    }

}

const getById = async orderId => {

    try {
        
        return await pedidoRepository.getById(orderId)

    } catch (err) {
        
        throw new Error(err)

    }

}

const create = async data => {

    try {

        if (!await checkIfHasStock(data))
            throw new Error('Um ou mais produtos estão sem estoque')

        if (await updateStockProduct(data))
            return await pedidoRepository.create(data)

    } catch (err) {

        throw new Error(err)

    }

}

const update = async (orderId, data) => {

    try {

        if (checkIfHasOrder(orderId))
            return await pedidoRepository.update(orderId, data)

    } catch (err) {

        throw new Error(err)

    }

}

const destroy = async orderId => {

    try {

        const order = await checkIfHasOrder(orderId)
        if (order && await updateStockProduct(order, 'up'))
            await pedidoRepository.destroy(orderId)

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

const checkIfHasStock = async data => {

    try {

        hasStock = true
        for(const prod of data.produtos) {
            if (hasStock) {
                const product = await productService.getById(prod.produto_id)
                
                if (!product) 
                    throw new Error ('Produto não encontrado')

                if (product.quantidade < prod.quantidade)
                    hasStock = false
            }
        }

        return (hasStock) ? true : false

    } catch (err) {

        throw new Error (err)

    }

}

const updateStockProduct = async (data, type = 'down') => {

    try {
        
        const erro = false
        for (const prod of data.produtos) {
            if (!erro) {
                const product = await productService.getById(prod.produto_id)
                if (!product) 
                    throw new Error ('Produto não encontrado')
        
                if (type == 'down') {
                    quantidade = parseInt(product.quantidade) - parseInt(prod.quantidade)
                } else {
                    quantidade = parseInt(product.quantidade) + parseInt(prod.quantidade)
                }
                
                if (!await productService.update(prod.produto_id, {'quantidade': quantidade}))
                    erro = true
            }
        }

        return (!erro) ? true : false

    } catch (err) {

        throw new Error (err)

    }

}

const checkIfHasOrder = async orderId => {

    const hasOrder = await pedidoRepository.getById(orderId)
    if (!hasOrder)
        throw new Error('Pedido não encontrado!')

    return hasOrder

}

module.exports = {get, getById, create, update, destroy}