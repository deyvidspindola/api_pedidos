const pedidoRepository = require('../repositories/pedidoRepository')

module.exports = server => {

    server.get('/pedidos', async (req, res) => {

        pedidoRepository.list(res)

    })

    server.post('/pedidos', async (req, res) => {

        try{

            const pedido = await PedidoModel.create(req.body)
            return res.send({ pedido })

        } catch (err) {
            return res.send(500, err)
        }

    })

}