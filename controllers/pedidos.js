const pedidoService = require('../services/pedidoService')

module.exports = server => {

    server.get('/pedidos/:search', async (req, res) => {

        try {

            const search = (req.params.search) ? req.params.search : null
            const orders = await pedidoService.get(search)
            res.send(orders)
        
        } catch(err) {
            
            res.send(500, err.message)
        
        }

    })

    server.post('/pedido', async (req, res) => {

        try {

            const data = req.body
            const order = await pedidoService.create(data)
            res.send(201, order)

        } catch (err) {

            res.send(500, err.message)
       
        }

    })

    server.put('/pedido/:orderId', async (req, res) => {

        try {

            const orderId = req.params.orderId
            const data = req.body
            const order = await pedidoService.update(orderId, data)
            res.send(order)

        } catch (err) {

            res.send(500, err.message)

        }

    })

    server.del('/pedido/:orderId', async (req, res) => {

        try {

            const orderId = req.params.orderId
            await pedidoService.destroy(orderId)
            res.send('Pedido removido com sucesso!')

        } catch (err) {

            res.send(500, err.message)

        }

    })

}