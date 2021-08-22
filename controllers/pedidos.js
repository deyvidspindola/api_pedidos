const pedidoService = require('../services/pedidoService')

module.exports = server => {

    server.get('/pedidos', async (req, res) => pedidoService.all(res))

    server.post('/pedidos', async (req, res) => {

        const pedido = req.body
        pedidoService.create(pedido, res)

    })

    server.put('/pedidos/:id', async (req, res) => {

        const find = req.params.id
        const data = req.body
        pedidoService.update(find, '_id',  data, res)

    })

    server.del('/pedidos/:id', async (req, res) => {

        const find = req.params.id
        pedidoService.delete(find, '_id', res)

    })

}