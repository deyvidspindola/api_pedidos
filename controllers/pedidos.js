import { PedidoModel } from '../models/pedido'

module.exports = server => {

    server.get('/pedidos', async (req, res) => {

        try{

            const pedidos = await PedidoModel.find()
            return res.send({ pedidos })

        } catch (err) {
            return res.send(500, err)
        }

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